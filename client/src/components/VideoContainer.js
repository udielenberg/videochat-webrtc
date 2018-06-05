import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 20px;
	padding: 30px;
	border: 1px solid lightgray;
`;
// var constraints = { audio: true, video: { width: 1280, height: 720 } };

// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then(function(mediaStream) {
//     const mediaRecorder = new MediaRecorder(mediaStream);
//     var video = document.querySelector("video");
//     video.srcObject = mediaStream;
//     video.onloadedmetadata = function(e) {
//       video.play();
//     };
//   })
//   .catch(function(err) {
//     console.log(err.name + ": " + err.message);
//   }); // always check for errors at the end.

class VideoContainer extends React.Component {
	async componentDidMount() {
		console.log(this.camViewer);
		const constraints = {
			audio: true,
			video: { width: 200, height: 200 }
		};
		navigator.mediaDevices.getUserMedia(constraints).then(mediaStream => {
			const mediaRecorder = new MediaRecorder(mediaStream);
			this.camViewer.srcObject = mediaStream;
			this.camViewer.onloadmetadata = e => {
				console.log("on load metadata...");
				this.camViewer.play();
			};
		});
	}

	render() {
		// console.log("a:", a);
		return (
			<Wrapper>
				<video
					id="gum"
					ref={camViewer => (this.camViewer = camViewer)}
					style={{ marginRight: "50px" }}
					autoPlay
					muted
				/>
				<video id="recorded" loop controls />
				<div>
					<button id="record">Start Recording</button>
					<button id="play">Play</button>
					<button id="download">Download</button>
				</div>
			</Wrapper>
		);
	}
}

export default VideoContainer;
