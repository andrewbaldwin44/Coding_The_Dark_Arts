export default function Tags({ tags }) {
  return (
    <div>
      {tags.map(({ tagName }, index) => (
        <span key={`tags-${index}`}>{tagName}</span>
      ))}
    </div>
  );
}
