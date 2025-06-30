import { db } from "@/configs/db";  // Your database connection
import { firebaseStorage } from '@/configs/firebase.config';  // Correctly import firebaseStorage
import { CourseList } from "@/schema/schema";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { eq } from "drizzle-orm";
import { CourseType } from "@/types/types";

// Function to upload files to Firebase Storage
export const uploadFilesToFirebase = async (
  file: Blob,
  courseInfo: CourseType
) => {
  try {
    // Generate a unique file name
    const fileName = `${Date.now()}-${courseInfo?.courseId!}-${courseInfo?.category}.jpg`;
    const storageRef = ref(firebaseStorage, "ai-learn-lab/" + fileName);  // Updated to "ai-learn-lab" folder

    // Upload the file
    await uploadBytes(storageRef, file);

    // Get the download URL for the uploaded file
    const url = await getDownloadURL(storageRef);

    // Update the database with the file's URL
    await db
      .update(CourseList)
      .set({
        courseBanner: url,  // Save the URL to the database
      })
      .where(eq(CourseList.id, courseInfo?.id!));

    console.log("Image uploaded and database updated successfully", url);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
