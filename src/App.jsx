import React from 'react'

import { ScrollTrigger, SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <p>App</p>
    </div>
  )
}

export default App;
