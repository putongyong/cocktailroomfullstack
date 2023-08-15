import { useState } from 'react';

export default function Questions() {
  const [activeAccordions, setActiveAccordions] = useState([]);

  const handleAccordionClick = (index) => {
    let updatedActiveAccordions = [...activeAccordions];
    if (updatedActiveAccordions.includes(index)) {
      updatedActiveAccordions = updatedActiveAccordions.filter((item) => item !== index);
    } else {
      updatedActiveAccordions.push(index);
    }
    setActiveAccordions(updatedActiveAccordions);
  };

  const isAccordionActive = (index) => {
    return activeAccordions.includes(index);
  };

  return (
    <>
      <div className="tm-container-inner-2 tm-info-section">
        <div className="row">
          <div className="col-12 tm-faq">
            <h2 className="text-center tm-section-title">FAQs</h2>
            <p className="text-center">
              This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS
              template. Thank you. #666
            </p>
            <div className="tm-accordion">
              <button
                className={`accordion ${isAccordionActive(1) ? 'active' : ''}`}
                onClick={() => handleAccordionClick(1)}
              >
                1. Fusce eu lorem et dui #09C maximus varius?
              </button>
              <div className={`panel ${isAccordionActive(1) ? 'show' : ''}`}>
                <p>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas
                  massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
              </div>

              <button
                className={`accordion ${isAccordionActive(2) ? 'active' : ''}`}
                onClick={() => handleAccordionClick(2)}
              >
                2. Vestibulum #999 ante ipsum primis in faucibus orci?
              </button>
              <div className={`panel ${isAccordionActive(2) ? 'show' : ''}`}>
                <p>Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend
                  urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel,
                  interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.</p>
              </div>

              <button
                className={`accordion ${isAccordionActive(3) ? 'active' : ''}`}
                onClick={() => handleAccordionClick(3)}
              >
                3. Can I redistribute this template as a ZIP file?
              </button>
              <div className={`panel ${isAccordionActive(3) ? 'show' : ''}`}>
                <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly
                  prohibited. You will need to <a href="https://templatemo.com/contact">contact TemplateMo</a> for
                  additional permissions about our templates. Thank you.</p>
              </div>

              <button
                className={`accordion ${isAccordionActive(4) ? 'active' : ''}`}
                onClick={() => handleAccordionClick(4)}
              >
                4. Ut ac erat sit amet neque efficitur faucibus et in lectus?
              </button>
              <div className={`panel ${isAccordionActive(4) ? 'show' : ''}`}>
                <p>Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla
                  venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit
                  ullamcorper enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
