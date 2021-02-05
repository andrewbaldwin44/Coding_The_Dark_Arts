interface IFormControl {
  text: string;
  inputRef: React.Ref<HTMLInputElement>;
  className: string;
  htmlType: string;
}

export default function FormControl({ text, inputRef, className, htmlType }: IFormControl) {
  return (
    <div className='form-control'>
      <input ref={inputRef} className={className} required type={htmlType} />

      <label htmlFor={htmlType}>
        {text.split('').map((letter: string, i: number) => (
          <span key={`${text}-${i}`} style={{ transitionDelay: `${i * 50}ms` }}>
            {letter}
          </span>
        ))}
      </label>
    </div>
  );
}
