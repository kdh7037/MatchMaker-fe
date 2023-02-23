import Button from '@components/button';
import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';
import { useState } from "react";

const DetailDiaryPage = () => {
  const submitHandler: OnSubmitHandler = formData => {
    console.log(formData);
  };


  const clickLikesButton = (e) => {
    if (!diaryHatesClickable) { // 싫어요 버튼이 비활성 상태인 경우 (== 좋아요 버튼을 누른 경우)
      setDiaryLikesCount(diaryLikesCount - 1);
      setDiaryHatesClickable(true);
    } else { // 좋아요, 실어요 둘 다 안 누른 경우
      setDiaryLikesCount(diaryLikesCount + 1);
      setDiaryHatesClickable(false);
    }
  };

  const clickHatesButton = (e) => {
    if (!diaryLikesClickable) { // 좋아요 버튼이 비활성 상태인 경우 (== 싫어요 버튼을 누른 경우)
      setDiaryHatesCount(diaryHatesCount - 1);
      setDiaryLikesClickable(true);
    } else { // 좋아요, 실어요 둘 다 안 누른 경우
      setDiaryHatesCount(diaryHatesCount + 1);
      setDiaryLikesClickable(false);
    }
  };


  const getDiaryTitle = () => {
    return 'title';
  };

  const getDiaryAuthor = () => {
    return 'author';
  };

  const getDiaryContents = () => {
    return '일기 내용';
  };

  const getCommentAuthor = (userId: number) => {
    return '사용자' + userId;
  };

  const getCommentContents = (commentId: number) => {
    return '댓글 내용~~~~' + commentId;
  };

  const [diaryLikesCount, setDiaryLikesCount] = useState(0);
  const [diaryHatesCount, setDiaryHatesCount] = useState(0);

  const [diaryLikesClickable, setDiaryLikesClickable] = useState(true);
  const [diaryHatesClickable, setDiaryHatesClickable] = useState(true);

  return (
    <>
      <div>
        <h1 className="mb-8 text-3xl">{getDiaryTitle()}</h1>
        <div>{getDiaryAuthor()}</div>
        <p>{getDiaryContents()}</p>

        <div>
          <Button
            name="diaryLikes"
            onClick={clickLikesButton}
            disabled={!diaryLikesClickable}>
            좋아요 {diaryLikesCount}
          </Button>
          <Button
            name="diaryHates"
            onClick={clickHatesButton}
            disabled={!diaryHatesClickable}>
            싫어요 {diaryHatesCount}
          </Button>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div>
        <h2>댓글</h2>
        <div>
          <div>
            <div>{getCommentAuthor(1)}</div>
            <div>{getCommentContents(1)}</div>
          </div>
          <div>
            <Button>좋아요</Button>11
          </div>
          <div>
            <Button>싫어요</Button>11
          </div>
        </div>

        <Form onSubmit={submitHandler}>
          <FormInput
            label="댓글"
            type="longtext"
            name="contents"
            placeholder="댓글을 작성해주세요." />
          <SubmitButton>등록</SubmitButton>
        </Form>
      </div>
    </>
  );
};

export default DetailDiaryPage;
