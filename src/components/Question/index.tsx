import './styles.scss';

type QuestionProps= {
  // id: string,
  content: string,
  author: {
    name: string,
    avatar: string
  },
  // isAnswered: boolean,
  // isHighlighted: boolean

} 


export function Question ({
  content,
  author 
}: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name } referrerPolicy="no-referrer" />
          <span>{author.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  );
}