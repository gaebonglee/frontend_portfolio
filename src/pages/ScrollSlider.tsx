import useScrollSlider from "hooks/useScrollSlider";
import "../styles/components/projects/ScrollSlider.scss";

export default function ScrollSlider() {
  const { sliderRef, wrapperRef } = useScrollSlider();

  return (
    <section ref={sliderRef} className="section-items bg-dark text-white">
      <div className="scroll-slider">
        <div ref={wrapperRef} className="scroll-wrapper">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="item scroll-slide">
              <div className="scroll-line"></div>
              <div className="item-container">
                <div className="item-image">
                  <img
                    src="/images/project/TMP.png"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
                <div className="item-body">
                  <h2 className="item-title">Grand Hotel</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <ul className="nav tags">
                    <li className="nav-item tag">
                      <a href="#" className="nav-link">
                        Hotel
                      </a>
                    </li>
                    <li className="nav-item tag">
                      <a href="#" className="nav-link">
                        Colorful
                      </a>
                    </li>
                    <li className="nav-item tag">
                      <a href="#" className="nav-link">
                        Symmetric
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
