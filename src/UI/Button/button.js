import s from './button.module.css';

function Button({title, color, ...otherProps}) {
  return (
    <button className={`${s.btn_elem} ${s[color]}`} {...otherProps}>
        {title}
    </button>
  );
}

export default Button;
