const ButtonComponent = function (props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.color,
          border: props.border,
          color: props.textColor,
          padding: props.padding,
          borderRadius: props.roundedBorder,
          marginBottom: props.spacing,
        }}
      >
        {props.content}
      </button>
    </div>
  );
};

export default ButtonComponent;
