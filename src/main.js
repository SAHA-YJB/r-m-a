//기본 라우터 구성
import App from "./App"
import router from './routes/index'

const root = document.querySelector('#root')
// App안에 실제 요소를 밀어넣기
root.append(new App().el)

router()