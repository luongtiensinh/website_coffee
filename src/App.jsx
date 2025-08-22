import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
       <a href='https://www.highlandscoffee.com.vn/vn/phindi-choco.html'> truy cap đường dẫn</a>
    </div>
      <div class="logo">
        <h1 class="tieude">Giao dien de mo quan cafee </h1>
        <img src="https://spencil.vn/wp-content/uploads/2024/06/mau-thiet-ke-logo-thuong-hieu-cafe-SPencil-Agency-6-1024x849.jpeg" alt="ảnh logo" />
      </div>
      <div class="buttons">
        <button > <a href='https://www.highlandscoffee.com.vn/vn/phindi-choco.html'> truy cap tao nut bam</a></button>
      
      </div>
    </>
  )
}

export default App
