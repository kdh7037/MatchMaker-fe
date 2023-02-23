import Button from '@components/button';
import Form, {OnSubmitHandler} from '@components/form';
import FormInput from '@components/form/input';
import SubmitButton from '@components/form/submit';
import {useState} from 'react';

// for test
const mockDiary = {
  diaryId: 0,
  author: 'string',
  title: 'string',
  contents: 'string',
  likes: 0,
  hates: 0,
  createdAt: '2023-02-23T14:10:41.883Z',
  comments: [{
    commentId: 0,
    author: 'string',
    contents: 'string1',
    createdAt: '2023-02-23T14:10:41.883Z'
  }, {
    commentId: 1,
    author: 'string',
    contents: 'string2',
    createdAt: '2023-02-23T14:10:41.883Z'
  }, {
    commentId: 2,
    author: 'string',
    contents: 'string3',
    createdAt: '2023-02-23T14:10:41.883Z'
  }]
};

/** 댓글 목록 컴포넌트 */
const CommentList = ({comments}: {comments: typeof mockDiary.comments}) => {
  return (
    <>
      {comments.map(comment => (
        <li key={comment.commentId}>
          <div>
            <div>{comment.author}</div>
            <div>{comment.contents}</div>
          </div>
          <div>
            <Button>좋아요</Button>
          </div>
          <div>
            <Button>싫어요</Button>
          </div>
        </li>
      ))}
    </>
  );
};

/** 다이어리 상세 페이지 */
const DetailDiaryPage = () => {
  const submitHandler: OnSubmitHandler = formData => {
    console.log(formData);
  };

  /** 버튼 클릭한 상태 */
  const [reactionType, setReactionType] = useState<'like' | 'hate' | null>(null);
  const isLiked = reactionType === 'like';
  const isHated = reactionType === 'hate';

  // 총 좋아요 수
  const diaryLikes = 37 + (isLiked ? 1 : 0);
  const diaryHates = 1 + (isHated ? 1 : 0);

  const onClickLike = () => {
    setReactionType(isLiked ? null : 'like');
  };

  const onClickHate = () => {
    setReactionType(isHated ? null : 'hate');
  };

  return (
    <>
      <div>
        <h1 className="mb-8 text-3xl">
          {mockDiary.title}
        </h1>
        <div>
          {mockDiary.author}
        </div>
        <p>
          {mockDiary.contents}
        </p>
        <div>
          <Button
            name="diaryLikes"
            onClick={onClickLike}
          >
            좋아요 {diaryLikes}
          </Button>
          <Button
            name="diaryHates"
            onClick={onClickHate}
          >
            싫어요 {diaryHates}
          </Button>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div>
        <h2>댓글</h2>
        <ol>
          <CommentList comments={mockDiary.comments} />
        </ol>

        <Form onSubmit={submitHandler}>
          <FormInput
            label="댓글"
            type="longtext"
            name="contents"
            placeholder="댓글을 작성해주세요."
          />
          <SubmitButton>등록</SubmitButton>
        </Form>
      </div>
    </>
  );
};

export default DetailDiaryPage;
