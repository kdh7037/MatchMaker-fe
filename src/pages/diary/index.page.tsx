import Button from "@components/button";
import Pagination from "@components/pagination";

const DiaryListPage = () => {

  return (
    <>
      <h1 className="mb-8 text-3xl">
        Diary List Page
      </h1>

      <Button>글쓰기</Button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>제목 1</td>
            <td>작성자 1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>제목 2</td>
            <td>작성자 2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>제목 3</td>
            <td>작성자 3</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      <Button>글쓰기</Button>
    </>
  );
};

export default DiaryListPage;
