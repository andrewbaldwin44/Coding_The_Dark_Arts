interface IFormControl {
  text: string;
  inputRef: React.Ref<HTMLInputElement>;
  className: string;
  htmlType: string;
}

export function FormControl({ text, inputRef, className, htmlType }: IFormControl) {
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

// useEffect(() => {
//     const labels = document.querySelectorAll('.form-control label');

//     labels.forEach((label: React.ElementType) => {
//       label.innerHTML = label.innerText
//         .split('')
//         .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)
//         .join('');
//       // Take off transition delay for the entire word to transition at the same time
//     });
//   }, []);
