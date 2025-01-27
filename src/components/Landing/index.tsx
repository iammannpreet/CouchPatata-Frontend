import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.scss";

// Import images
import background from "../../assets/landing/layer1.png";
import mountain from "../../assets/landing/layer2.png";
import man from "../../assets/landing/layer3.png";

function Landing() {
  return (
    <div className={styles.Landing}>
      <h1>hello</h1>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className={styles.parallax}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={2.5}>
          <div
            className={`${styles.parallax_layer} ${styles.animation}`}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </ParallaxLayer>

        {/* Mountain Layer */}
        <ParallaxLayer offset={0} speed={2}>
          <div
            className={`${styles.parallax_layer} ${styles.animation}`}
            style={{
              backgroundImage: `url(${mountain})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </ParallaxLayer>

        {/* Man Layer */}
        <ParallaxLayer offset={0} speed={1.5}>
          <div
            className={`${styles.parallax_layer} ${styles.animation}`}
            style={{
              backgroundImage: `url(${man})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landing;
