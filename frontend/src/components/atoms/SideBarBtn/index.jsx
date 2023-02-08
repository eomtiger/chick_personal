{
  /* 
    최초 작성자: 최정온
    수정 작성자: 최정온
    최초 작성일: 23.01.29
    수정 작성일: 23.01.29
    
    Ver 1.0.0
    
    - 사용 예시:
      <SideBarBtn
        type={"tiger"}
        selected={true}
        onClick={() => console.log("Clicked")}
      />
    */
}
import Tiger from "../../../assets/images/sidebar/tiger.svg";
import Rice from "../../../assets/images/sidebar/rice.svg";
import Dance from "../../../assets/images/sidebar/dance.svg";
import Painting from "../../../assets/images/sidebar/painting.svg";
import MyPage from "../../../assets/images/sidebar/chick_01.svg";

function SideBarBtn({ type, selected, onClick }) {
  if (type === "rice") {
    if (selected) {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Rice} />
          <span className={"font-chick text-xl text-blue-500 "}>밥먹기</span>
        </button>
      );
    } else {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Rice} />
          <span className={"font-chick text-xl "}>밥먹기</span>
        </button>
      );
    }
  } else if (type === "tiger") {
    if (selected) {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Tiger} />
          <span className={"font-chick text-xl text-blue-500 "}>얼굴놀이</span>
        </button>
      );
    } else {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Tiger} />
          <span className={"font-chick text-xl "}>얼굴놀이</span>
        </button>
      );
    }
  } else if (type === "dance") {
    if (selected) {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Dance} />
          <span className={"font-chick text-xl text-blue-500 "}>율동놀이</span>
        </button>
      );
    } else {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Dance} />
          <span className={"font-chick text-xl "}>율동놀이</span>
        </button>
      );
    }
  } else if (type === "painting") {
    if (selected) {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Tiger} />
          <span className={"font-chick text-xl text-blue-500 "}>
            그림그리기
          </span>
        </button>
      );
    } else {
      return (
        <button onClick={onClick} className="py-2">
          <img src={Painting} />
          <span className={"font-chick text-xl "}>그림놀이</span>
        </button>
      );
    }
  } else if (type === "myPage") {
    if (selected) {
      return (
        <button onClick={onClick} className="py-2">
          <img src={MyPage} />
          <span className={"font-chick text-xl text-blue-500 "}>내정보</span>
        </button>
      );
    } else {
      return (
        <button onClick={onClick} className="py-2">
          <img src={MyPage} />
          <span className={"font-chick text-xl "}>내정보</span>
        </button>
      );
    }
  }
}

export default SideBarBtn;
