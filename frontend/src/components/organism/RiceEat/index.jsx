import RiceEatHomeBox from '../../molecules/RiceEatHomeBox';
import CommonBtn from './../../atoms/CommonBtn/index';

function RiceEat(params) {
  return (
    <div className="absolute left-48 w-[1076px] h-[100%]">
      <div className="flex justify-end">
        <CommonBtn text={'회원가입'} />
        <CommonBtn text={'로그인'} color="yellow" />
      </div>
      <RiceEatHomeBox />
    </div>
  );
}

export default RiceEat;
