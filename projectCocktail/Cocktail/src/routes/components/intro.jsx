export default function Intro(){
    return (
        <>
            <div className="video-background">
				<video autoPlay loop muted>
					<source src="../video/pexels-cottonbro-studio-3188951-1920x1080-25fps.mp4" type="video/mp4" />
				</video>
				<div className="text-container">
					<h1>Welcome to my website!</h1>
					<p>Some additional text here...</p>
				</div>
			</div>
		</>
    )
}