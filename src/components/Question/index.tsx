import { ReactNode } from 'react';
import './styles.scss';

type QuestionProps= {
  content: string,
  author: {
    name: string,
    avatar: string
  },
  isAnswered?: boolean
  isHighLighted?: boolean
  children?: ReactNode
} 


export function Question ({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children
}: QuestionProps) {
  return (
    <div className={`question ${isAnswered ? 'answered' : ''} ${isHighLighted && !isAnswered ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name } referrerPolicy="no-referrer" />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}