import { useEffect,useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

//1. 앱이 실행되면 위치기반 날씨 확인 가능.
//2. 도시, 섭씨, 화씨 날씨상태
//3. 5개의 버튼(1개의 현재위치, 4개의 다른도시)
//4. 도시버튼을 클릭할때마다 도시별 날씨정보 확인가능
//5. 현재위치 버튼을 누르면 다시 현재의치 기반의 날씨로 돌아옴.
//6. 데이터를 들고 오는 동안 로딩스피너 표시.
function App() {

  const [weather, setWeather] = useState(null);
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
let lat = position.coords.latitude;
let lon = position.coords.longitude;
getWeatherByCurrentLocation(lat, lon)
    });
  };

const getWeatherByCurrentLocation = async(lat, lon)=>{
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e36d45f52b07a959c9dc024c0ae70387&units=metric`
let response = await fetch(url)
let data = await response.json();
setWeather(data)
};

  useEffect(()=> {
getCurrentLocation()
  },[])

  return (
    <div>
      <div className="container">
<WeatherBox weather={weather}/>
<WeatherButton />
</div>
    </div>
  );
}

export default App;
