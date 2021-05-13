import React from "react"

export default class EmbedYt extends React.Component {
    render() {
        return (
            <div style={{
            }}>
                <iframe
                    width="560" height="315"
                    src="https://www.youtube.com/embed/jMIFOTEWwxQ?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&playlist=jMIFOTEWwxQ&loop=1&modestbranding=1&autohide=1"
                    title="YouTube video player"
                    frameborder="0"
                    style={{
                        zIndex: "-1",
                        position: "fixed",
                        height: "100%", 
                        width: "100%",
                        pointerEvents:"none",
                        
                    }}
                    allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture"
                    allowfullscreen>

                </iframe>
            </div>
        )
    }
}