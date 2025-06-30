import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";
import Chat from "./_components/Chat"; // Import the chatbot component

const Page = () => {
  return (
    <div className="relative">
      <AddCourse />
      <UserCourseList />

      {/* Chatbot - Positioned in the bottom right corner */}
      <Chat />
    </div>
  );
};

export default Page;
