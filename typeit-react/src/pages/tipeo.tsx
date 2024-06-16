import TypeIt from "typeit-react";
import styles from "./HomeJumbo.module.css";

export default function Tipeo() {
    return (
        <div className="App">
            <TypeIt>This will be typed in a `span` element!</TypeIt>
            <br />
            <TypeIt
            
                getBeforeInit={(instance) => {
                    instance
                        .options({ speed: 100 })
                        .type("espanso")
                        .pause(500)
                        .options({ speed: 2, lifeLike: false })
                        .delete(7)
                        .options({ speed: 2, lifeLike: false })
                        .type(
                            `Supercharge your <br><span class="${styles.highlight}">typing</span> experience.`,
                        )
                        .pause(1000)
                        .move(-12)
                        .pause(500)
                        .delete(6)
                        .type(
                            `<span class="${styles.highlight}">messaging</span>`,
                        )
                        .pause(2000)
                        .delete(9)
                        .type(
                            `<span class="${styles.highlight}">scripting</span>`,
                        )
                        .pause(2000)
                        .delete(9)
                        .type(
                            `<span class="${styles.highlight}">coding</span>`,
                        )
                        .pause(2000)
                        .delete(6)
                        .type(
                            `<span class="${styles.highlight}">emojis</span>`,
                        )
                        .pause(2000)
                        .delete(6)
                        .type(
                            `<span class="${styles.highlight}">typing</span>`,
                        );

                    return instance;
                }}
            />
        </div>
    );
}