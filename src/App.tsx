import './App.css';
import blogImg from '@/assets/images/illustration-article.svg';
import avatar from '@/assets/images/image-avatar.webp'

function App() {
	return (
		<main>
			<div className='card'>
				<figure className='blog-image'>
					<img src={blogImg} alt='blog' />
				</figure>
				<div className='content'>
					<span className='category'>Learning</span>
					<p>Published 21 Dec 2023</p>
					<h1>HTML & CSS foundations</h1>
					<p className='description'>
						These languages are the backbone of every website,
						defining structure, content, and presentation.
					</p>
				</div>
        <div className="author">
          <figure className="author-image">
            <img src={avatar} alt="Greg Hooper" />
          </figure>
          <span className="author-name">Greg Hooper</span>
        </div>
			</div>
		</main>
	);
}

export default App;
