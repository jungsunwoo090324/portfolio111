import { useEffect, useSyncExternalStore } from 'react'
import './App.css'

function subscribeToNavigation(onChange) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getCurrentLocation() {
  return window.location.hash
}

const introduction = '안녕하세요 저는 끈끈함이 있는 AlPa입니다.'
const projects = []

function ProjectArtwork({ project, className = '' }) {
  return (
    <div className={`project-art ${project.style} ${className}`} aria-hidden="true">
      <span className="project-number">{project.number}</span>
      {project.style === 'website' && <div className="mini-browser"><div className="mini-toolbar"><i /><i /><i /></div><div className="mini-layout"><span>HELLO!</span><div /><p>My little corner<br />of the internet.</p></div></div>}
      {project.style === 'idea' && <><div className="idea-circle" /><span className="idea-asterisk">✳</span><span className="idea-caption">WHAT IF?</span></>}
      {project.style === 'creative' && <><div className="creative-shape shape-one" /><div className="creative-shape shape-two" /><span className="creative-caption">make<br /><em>something.</em></span></>}
    </div>
  )
}

function App() {
  const currentLocation = useSyncExternalStore(subscribeToNavigation, getCurrentLocation)
  const isPortfolioPage = currentLocation === '#/portfolio'
  const isAboutPage = currentLocation === '#/about' || currentLocation === '#about'
  const isProjectPage = currentLocation.startsWith('#/portfolio/')
  const selectedProject = isProjectPage ? projects.find((project) => currentLocation === `#/portfolio/${project.style}`) : undefined

  useEffect(() => {
    document.title = isProjectPage ? `${selectedProject?.title ?? '프로젝트를 찾을 수 없어요'} | 나의 포트폴리오` : isPortfolioPage ? '포트폴리오 목록 | 나의 포트폴리오' : isAboutPage ? '자기소개 | 나의 포트폴리오' : '나의 포트폴리오'

    if (isPortfolioPage || isAboutPage || isProjectPage) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.getElementById(isProjectPage ? 'project-title' : isPortfolioPage ? 'portfolio-title' : 'about-page-title')?.focus({ preventScroll: true })
    } else {
      const targetId = currentLocation.slice(1) || 'home'
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    }
  }, [currentLocation, isPortfolioPage, isAboutPage, isProjectPage, selectedProject])

  return (
    <>
      <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); document.getElementById('main')?.focus(); document.getElementById('main')?.scrollIntoView({ block: 'start' }) }}>본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="나의 포트폴리오 홈">
            <span className="brand-symbol" aria-hidden="true">✳</span> my portfolio<span className="brand-dot">.</span>
          </a>
          <nav aria-label="주요 메뉴">
            <a href="#/about" aria-current={isAboutPage ? 'page' : undefined}>자기소개</a>
            <a href="#/portfolio" aria-current={isPortfolioPage || isProjectPage ? 'page' : undefined}>포트폴리오 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {!isPortfolioPage && !isAboutPage && !isProjectPage && <>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> A LITTLE ABOUT ME, A LOT TO EXPLORE</p>
            <h1 id="hero-title">작은 호기심이,<br />나만의 <span className="underlined">결과물로.</span></h1>
            <p className="hero-description">{introduction}<br />잘하는 것과 앞으로의 꿈을 소개하는 공간에 오신 걸 환영해요.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#/portfolio">포트폴리오 보기 <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#/about">어떤 사람인가요? <span aria-hidden="true">→</span></a>
            </div>
            <p className="hero-note"><span aria-hidden="true">✳</span> 완벽하지 않아도 괜찮아. 일단 시작해 보기!</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" /><div className="art-orbit" /><span className="art-spark">✳</span>
            <div className="floating-label"><span className="status-dot" /> 계속 성장하는 중</div>
            <div className="project-window">
              <div className="window-bar"><span /><span /><span /><p>my-portfolio</p><span className="window-expand">↗</span></div>
              <div className="window-content">
                <span className="window-kicker">HELLO, WORLD!</span>
                <p className="window-title">나다운 것을<br />만들어 가는 일<span>.</span></p>
                <div className="window-scene"><div className="scene-circle" /><div className="scene-stairs"><i /><i /><i /></div><span>↗</span></div>
                <div className="window-footer"><span>CURIOUS MIND, CREATIVE HANDS</span><span>01 / ∞</span></div>
              </div>
            </div>
            <div className="idea-note"><span>NOTE TO SELF</span><p>오늘의 시도가<br />내일의 나를 만든다.</p><span className="note-arrow">⤴</span></div>
            <div className="art-caption">IDEA <span>→</span> MAKE <span>→</span> GROW</div>
          </div>
        </section>
        <div className="section-divider page-width"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></div>
        <section className="about-section page-width" id="about" aria-labelledby="about-title">
          <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2 id="about-title">안녕하세요,<br />AlPa입니다<span>.</span></h2></div>
          <div className="about-content">
            <span className="example-label">AlPa의 이야기</span>
            <h3>끈끈함이 있는<br />AlPa입니다.</h3>
            <p>{introduction} 이곳에서 나의 강점과 앞으로의 꿈을 만나 보세요.</p>
            <div className="interest-tags"><span># 운동</span><span># 농구</span></div>
            <a className="text-link about-more" href="#/about">자기소개 보기 <span aria-hidden="true">→</span></a>
          </div>
        </section>
        <section className="work-invitation">
          <div className="page-width work-invitation-inner">
            <div><p className="eyebrow">EXPLORE MY WORK</p><h2>앞으로 채워 갈 작업 공간<span>.</span></h2><p className="invitation-description">활동과 작품은 준비되면 하나씩 소개할 예정입니다.</p></div>
            <a className="button button-primary" href="#/portfolio">포트폴리오 목록 보기 <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        </>}
        {isAboutPage && <section className="about-page page-width" aria-labelledby="about-page-title">
          <a className="text-link list-back" href="#home"><span aria-hidden="true">←</span> 홈으로 돌아가기</a>
          <div className="about-page-heading">
            <p className="eyebrow">MY STORY / ABOUT ME</p>
            <h1 id="about-page-title" tabIndex={-1}>자기소개<span>.</span></h1>
            <p className="list-description">좋아하는 것과 배우는 것, 그리고 앞으로의 나에 대한 이야기.</p>
          </div>
          <div className="about-profile">
            <div className="about-profile-art" aria-hidden="true"><span>✳</span><p>STILL LEARNING,<br />ALWAYS GROWING.</p><div>나만의 속도로,<br />나만의 방향으로.</div></div>
            <div className="about-content">
              <span className="example-label">AlPa의 이야기</span>
              <h2>안녕하세요,<br />AlPa입니다<span>.</span></h2>
              <p>{introduction}</p>
              <dl className="about-details">
                <div><dt>관심사와 취미</dt><dd>운동입니다.</dd></div>
                <div><dt>내가 잘하는 것</dt><dd>농구입니다.</dd></div>
                <div><dt>배우고 싶은 것</dt><dd>자격증을 취득하기 위한 공부를 하고 싶습니다.</dd></div>
                <div><dt>해본 활동과 작품</dt><dd>아직 없습니다. 앞으로의 경험을 이곳에 채워 갈 예정입니다.</dd></div>
                <div><dt>앞으로의 목표</dt><dd>취업입니다.</dd></div>
              </dl>
              <a className="button button-primary" href="#/portfolio">포트폴리오 보기 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>}
        {isPortfolioPage && <section className="portfolio-section portfolio-page" aria-labelledby="portfolio-title">
          <div className="page-width">
            <a className="text-link list-back" href="#home"><span aria-hidden="true">←</span> 홈으로 돌아가기</a>
            <div className="portfolio-heading"><div><p className="eyebrow">MY PORTFOLIO / SELECTED WORK</p><h1 id="portfolio-title" tabIndex={-1}>포트폴리오<span>.</span></h1><p className="list-description">AlPa의 활동과 작품을 담아 갈 공간입니다.</p></div></div>
            <div className="list-summary"><span>전체 프로젝트</span><span>{projects.length.toString().padStart(2, '0')}</span></div>
            {projects.length === 0 && <div className="portfolio-empty"><span className="example-label">앞으로 채워 갈 공간</span><h2>첫 번째 이야기를 기다리고 있어요<span>.</span></h2><p>아직 등록한 활동이나 작품이 없습니다. 준비되면 짧은 소개부터 담을 수 있어요. 사진은 나중에 추가해도 괜찮아요.</p><a className="text-link" href="#/about">AlPa 자기소개 보기 <span aria-hidden="true">→</span></a></div>}
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <a className="project-card-link" href={`#/portfolio/${project.style}`} aria-label={`${project.title} 자세히 보기`}>
                    <ProjectArtwork project={project} />
                    <div className="project-category">{project.category}</div>
                    <h3>{project.title}</h3><p>{project.description}</p>
                    <span className="project-read-more">자세히 보기 <span aria-hidden="true">↗</span></span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>}
        {isProjectPage && <section className="project-detail page-width" aria-labelledby="project-title">
          <a className="text-link list-back" href="#/portfolio"><span aria-hidden="true">←</span> 포트폴리오 목록으로</a>
          {selectedProject ? <>
            <header className="detail-heading">
              <p className="eyebrow">PROJECT {selectedProject.number} / {selectedProject.category}</p>
              <h1 id="project-title" tabIndex={-1}>{selectedProject.title}<span>.</span></h1>
              <p className="list-description">{selectedProject.description}</p>
            </header>
            <div className="detail-banner">
              <ProjectArtwork project={selectedProject} className="detail-art" />
              <div className="detail-overview">
                <span className="example-label">AlPa의 작업</span>
                <h2>프로젝트 소개</h2>
                <p>{selectedProject.overview}</p>
              </div>
            </div>
            <div className="detail-story">
              <section className="detail-story-section" aria-labelledby="project-goal"><h2 id="project-goal"><span>01</span> 왜 만들었나요?</h2><p>{selectedProject.goal}</p></section>
              <section className="detail-story-section" aria-labelledby="project-process"><h2 id="project-process"><span>02</span> 어떻게 만들었나요?</h2><ol>{selectedProject.process.map((step) => <li key={step}>{step}</li>)}</ol></section>
              <section className="detail-story-section" aria-labelledby="project-learning"><h2 id="project-learning"><span>03</span> 무엇을 배웠나요?</h2><p>{selectedProject.learning}</p></section>
            </div>
            <div className="detail-bottom"><p>다른 작업도 둘러보세요.</p><a className="button button-primary" href="#/portfolio">목록으로 돌아가기 <span aria-hidden="true">→</span></a></div>
          </> : <div className="project-not-found"><h1 id="project-title" tabIndex={-1}>프로젝트를 찾을 수 없어요.</h1><p>주소를 확인하거나 포트폴리오 목록에서 작업을 선택해 주세요.</p><a className="button button-primary" href="#/portfolio">포트폴리오 목록 보기 <span aria-hidden="true">→</span></a></div>}
        </section>}
      </main>
      <footer className="site-footer page-width"><a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a><p>나의 이야기는 계속됩니다.</p><button className="back-top" type="button" onClick={() => { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.getElementById('main')?.focus({ preventScroll: true }) }}>맨 위로 <span aria-hidden="true">↑</span></button></footer>
    </>
  )
}

export default App
