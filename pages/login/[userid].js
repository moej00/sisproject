import { useRouter } from "next/router";

const StudentPage = () => {
  const router = useRouter();
  const userid = router.query.userid;
  return <h1>Student Profile</h1>;
};

export default StudentPage;
