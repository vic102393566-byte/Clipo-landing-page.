import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';
import Wave from '../ui/Wave';
import Phone from '../ui/Phone';
import Arc from '../ui/Arc';

const CLIPS = [
  { title: 'Corte 1 · Momento forte', meta: 'Legenda pronta · 0:42' },
  { title: 'Corte 2 · Dica prática', meta: 'Legenda pronta · 0:51' },
  { title: 'Corte 3 · Resposta rápida', meta: 'Legenda pronta · 0:36' },
];

const HERO_HIGHLIGHT: [number, number][] = [[9, 16], [30, 38], [50, 56]];

/** 1. Primeira dobra: promessa, dois CTAs e demonstração conceitual da interface. */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="h-hero">
      <div className="glow g1" />
      <div className="glow g2" />
      <Arc className="a1" gradientId="arc-hero" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="badge">
              <i /> Edição e distribuição inteligente de vídeos curtos
            </span>
            <h1 id="h-hero">
              Seu conteúdo. Milhares de possibilidades. <span className="grad">Menos trabalho.</span>
            </h1>
            <p className="sub">
              Transforme vídeos longos em conteúdos curtos, legendados e prontos para conquistar as redes sociais. Deixe o
              trabalho pesado com o Clipo.
            </p>
            <div className="cta-row">
              <CtaLink type="signup" where="hero" className="btn btn-primary btn-lg">
                Quero conhecer o Clipo
              </CtaLink>
              <CtaLink type="demo" where="hero" className="btn btn-ghost btn-lg" arrow={false}>
                Ver como funciona
              </CtaLink>
            </div>
            <div className="chips">
              {['Feito para quem não é editor', 'Para iniciantes, criadores e empresas', 'Tudo em um só lugar'].map((t) => (
                <span className="chip" key={t}>
                  <Icon name="check" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="stage" aria-label="Demonstração conceitual da interface do Clipo">
            <div className="app">
              <div className="app-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <b>Clipo · Projeto: Podcast, episódio 42</b>
              </div>
              <div className="app-body">
                <div className="preview">
                  <span className="tag-live">Vídeo original · 58 min</span>
                  <span className="play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <div className="clips">
                  {CLIPS.map((c) => (
                    <div className="clip" key={c.title}>
                      <div className="th" />
                      <div>
                        <b>{c.title}</b>
                        <small>
                          <Icon name="check" className="ok" style={{ width: 12, height: 12 }} /> {c.meta}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="timeline">
                  <div className="row">
                    <span>0:00</span>
                    <span>Melhores momentos encontrados</span>
                    <span>58:00</span>
                  </div>
                  <Wave bars={64} seed={7} highlight={HERO_HIGHLIGHT} />
                  <div className="playhead" />
                </div>
              </div>
            </div>
            <div className="phones" aria-hidden="true">
              <Phone variant="p1" label="Corte 1" caption="O segredo é começar simples" />
              <Phone variant="p2" label="Corte 2" caption="Grave uma vez e publique muito" />
              <Phone variant="p3" label="Corte 3" caption="Legenda automática em segundos" />
            </div>
            <span className="stage-note">Ilustração conceitual da interface.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
