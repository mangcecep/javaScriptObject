import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
          <div className = "notificationFrame">
            <div className="panel">
              <div className="hader">

                <div className="menuIcon">
                  <div className="dashTop"></div>
                  <div className="dashBottom"></div>
                  <div className="circle"></div>
                </div>

                <span className="title">Timeline</span>

                <input
                type="text"
                className="searchInput"
                placeholder="search ..."/>

                <div className="fa fa-search searchIcon"></div>

              </div>

              <div className="content">
                <div className="line"></div>
                <div className="item">

                  <div class="avatar">
                    <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />Doug
                  </div>

                  <span className="time">
                    An hour ago
                    </span>
                    <p>Ate lunch</p>
                </div>

                <div className="item">

                  <div class="avatar">
                    <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />Doug
                  </div>

                  <span className="time">
                    10 am
                    </span>
                    <p>Read Day Two article</p>
                </div>

                <div className="item">

                  <div class="avatar">
                    <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />Doug
                  </div>

                  <span className="time">
                    10 am
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam harum, repudiandae autem</p>
                </div>

                <div className="item">

                  <div class="avatar">
                    <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" />Doug
                  </div>

                  <span className="time">
                    10 am
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam rem vitae deserunt
                    laudantium ratione temporibus quibusdam, hic perferendis laboriosam veniam! Delectus modi impedit
                    enim magni laboriosam suscipit molestiae hic.</p>
                </div>



            </div>
          </div>
        </div>

        )
    }
}

export default App