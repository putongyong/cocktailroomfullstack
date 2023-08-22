export default function Intro(){
    return (
        <>
            <div className="video-background">
				<video autoPlay loop muted>
					<source src="/product_images/16f00026-c8e0-4ef9-a3c8-8fd54acdb047.mp4" type="video/mp4" />
				</video>
				<div className="text-container">
					<h1>Welcome to my website!</h1>
					<p>Some additional text here...</p>
				</div>
			</div>
		</>
    )
}