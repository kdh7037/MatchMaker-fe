import clsx from 'clsx';
import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

export interface PaginationProps {
  /** 총 게시글 수 */
  totalContentsCount: number;
  /** 페이지 당 게시글 출력 수 최댓값 */
  pageContentsMaxCount: number;
  /** 현재 페이지 인덱스 값 */
  currentIndexNum: number;
}

const Pagination: FC<PaginationProps> = ({
  totalContentsCount,
  pageContentsMaxCount,
  currentIndexNum,
}) => {
  // 페이지네이션 인덱스 숫자 노출 최대 갯수(5 6 7 8 9 [10] 11 12 13 14 15)
  const pageIndexCount = 10;
  const firstIndexNum = 1;
  const lastIndexNum = Math.ceil(totalContentsCount / pageContentsMaxCount) || 1;

  /** 인덱스 출력 시의 처음 인덱스 번호 */
  const indexRowFirstIndexNum = currentIndexNum - ((currentIndexNum - 1) % pageIndexCount);

  return (
    // TODO: index에 맞춰 게시글 목록 출력
    <div>
      <ul>
        <li>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>&gt;</li>
      </ul>
    </div>
  );
};

export default Pagination;
