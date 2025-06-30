"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { CourseType, courseOutputType } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseList.context";
import SkeletonLoading from "./SkeletonLoading";

const UserCourseList = () => {
  const { user } = useUser();
  const [courses, setCourses] = useState<CourseType[] | null>(null);
  const { setUserCourseList } = useContext(UserCourseListContext);

  useEffect(() => {
    if (user) {
      getUserCourses();
    }
  }, [user]);

  const getUserCourses = async () => {
    const res = await db
      .select()
      .from(CourseList)
      .where(
        eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress ?? "")
      );

    // Convert `isVideo` to string and `courseOutput` to the correct type
    const formattedCourses: CourseType[] = res.map(course => ({
      ...course,
      isVideo: String(course.isVideo), // Convert boolean to string
      courseOutput: course.courseOutput as courseOutputType, // Ensure correct type
    }));

    setCourses(formattedCourses);
    setUserCourseList(formattedCourses);
  };

  if (courses?.length === 0) {
    return <div className="flex justify-center items-center mt-44">No courses found</div>;
  }

  return (
    <div className="mt-10">
      <h2 className="font-medium text-lg">My AI Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses ? (
          courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onRefresh={getUserCourses} // Simplified function call
            />
          ))
        ) : (
          <SkeletonLoading items={5} />
        )}
      </div>
    </div>
  );
};

export default UserCourseList;
