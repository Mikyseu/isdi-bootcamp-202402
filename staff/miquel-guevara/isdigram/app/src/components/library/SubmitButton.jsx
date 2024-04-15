import RoundButton from "./RoundButton";

// import "./SubmitButton.sass";

function SubmitButton(props) {
  return <RoundButton className="bg-[#F7C566]  inline-block min-w-auto" >{props.children || 'Submit'}</RoundButton>
}

export default SubmitButton
