"use client";
import React, { useContext, useEffect, useState } from "react";
import { stepperOptions } from "./_constants/stepperOptions";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDesc from "./_components/TopicDesc";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { generateCourseLayout } from "@/configs/ai-models";
import LoadingDialog from "./_components/LoadingDialog";
import { useUser } from "@clerk/nextjs";
import { storeDataInDatabase } from "./_utils/saveDataInDb";
import uuid4 from "uuid4";
import { useRouter } from "next/navigation";

// May be we need to remove these imports if we found any other best way
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { eq } from "drizzle-orm";
import { CourseType } from "@/types/types";
import { UserCourseListContext } from "../_context/UserCourseList.context";

const CreateCoursePage = () => {
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { userInput } = useContext(UserInputContext);
  const { user } = useUser();
  const router = useRouter();

  // Fix: Correctly using userCourseList context
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

  const getUserCourses = async () => {
    if (!user) return;
    try {
      const res = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.createdBy, user.primaryEmailAddress?.emailAddress ?? ""));
      setUserCourseList(res as CourseType[]);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const allowNextStep = () => {
    if (step === 0) {
      return (userInput?.category?.length ?? 0) > 0; // Ensures length is always a number
    } else if (step === 1) {
      return Boolean(userInput?.topic) && Boolean(userInput?.description);
    } else if (step === 2) {
      return (
        Boolean(userInput?.difficulty) &&
        Boolean(userInput?.duration) &&
        Boolean(userInput?.video) &&
        Boolean(userInput?.totalChapters)
      );
    }
    return false;
  };
  

  const generateCourse = async () => {
    const BASIC_PROMPT = `
      Generate a course tutorial on the following details with field name, description, 
      along with the chapter name and duration: 
      Category '${userInput?.category}', 
      Topic '${userInput?.topic}', 
      Description '${userInput?.description}', 
      Level '${userInput?.difficulty}', 
      Duration '${userInput?.duration}', 
      Chapters '${userInput?.totalChapters}' 
      in JSON format.
    `;

    setLoading(true);
    try {
      let id = uuid4();
      const result = await generateCourseLayout.sendMessage(BASIC_PROMPT);
      const data = await result.response.text(); // Fix: Await the text() response
      const parsedData = JSON.parse(data);
      
      await storeDataInDatabase(id, userInput, parsedData, user);
      router.replace(`/create-course/${id}`); // Fix: Use backticks for string interpolation
    } catch (error) {
      console.error("Error generating course:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex mt-10">
          {stepperOptions.map((option, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    step >= index ? "bg-purple-500" : ""
                  }`}
                >
                  <option.icon />
                </div>
                <p className="hidden md:block md:text-sm">{option.name}</p>
              </div>
              {index !== stepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] rounded-full bg-gray-300 ${
                    step > index ? "bg-purple-500" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {step === 0 ? <SelectCategory /> : step === 1 ? <TopicDesc /> : <SelectOption />}

        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0}>
            Previous
          </Button>

          {step === stepperOptions.length - 1 ? (
            <Button disabled={!allowNextStep() || loading} onClick={generateCourse} className="gap-2">
              <FaWandMagicSparkles /> Generate Course
            </Button>
          ) : (
            <Button onClick={() => setStep(step + 1)} disabled={!allowNextStep()}>
              Next
            </Button>
          )}
        </div>
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
};

export default CreateCoursePage;
