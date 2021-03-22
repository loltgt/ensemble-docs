import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.postLoad = this.postLoad.bind(this);
  }

  componentDidMount() {
    this.load();

    // this.elapsed = 0;
    // this.timerID = setInterval(() => this.loaded(), 3e2);
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  loadScript(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    if (cb && typeof cb == 'function') {
      script.onload = cb;
    }

    document.body.appendChild(script);
  }

  loadStyle(src, cb) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = src;

    if (cb && typeof cb == 'function') {
      style.onload = cb;
    }

    document.head.appendChild(style);
  }

  // loaded() {
  //   if ('ensemble' in window) {
  //     clearInterval(this.timerID);

  //     this.postLoad();
  //   }

  //   if (this.elapsed > 3e9) {
  //     clearInterval(this.timerID);
  //   }

  //   this.elapsed += 3e2;
  // }

  openTrigger(instance) {
    console.log(instance);

    if (! instance) {
      return;
    }

    instance.open();
  }
}


class ExampleModal extends Example {
  load() {
    this.loadScript('../ensemble-modal/dist/js/ensemble-modal.min.js', this.postLoad);
    this.loadStyle('../ensemble-modal/dist/css/ensemble-modal.min.css');
  }

  postLoad() {
    this.modal = new ensemble.Modal(document.getElementById('inline-content-to-display'));
  }

  render() {
    return (
      <div className="example">
        <div>
          <div className="example-block" id="inline-content-to-display">
            <h6>Just an example.</h6>
            <p>An inline content to display in a modal.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <button className="button button--primary button--lg" onClick={() => this.openTrigger(this.modal)}>Open this in a modal</button>
      </div>
    );
  }
}


class ExampleLightbox extends Example {
  load() {
    this.loadScript('../ensemble-lightbox/dist/js/ensemble-lightbox.min.js', this.postLoad);
    this.loadStyle('../ensemble-lightbox/dist/css/ensemble-lightbox.min.css');
  }

  postLoad() {
    this.lightbox = new ensemble.Lightbox(null, {
      contents: [
        {
          'type': 'image',
          'src': '../img/docusaurus.png'
        }
      ]
    });
  }

  render() {
    return (
      <div className="example">
        <button className="button button--primary button--lg" onClick={() => this.openTrigger(this.lightbox)}>Open a lightbox</button>
      </div>
    );
  }
}


class ExampleSocialShare extends Example {
  load() {
    this.loadScript('../ensemble-social-share/dist/js/ensemble-social-share.min.js', this.postLoad);
    this.loadStyle('../ensemble-social-share/dist/css/ensemble-social-share.min.css');
    this.loadStyle('../ensemble-social-share/iconset.tmp.css');
  }

  postLoad() {
    new ensemble.SocialShare(document.getElementById('my-div-placeholder'));
  }

  render() {
    return (
      <div className="example">
        <div className="example-block">
          <article>
            <h3>The post title</h3>
            <header>
              <p>Share this post!</p>
              <div id="my-div-placeholder"></div>
            </header>
            <h4>The body</h4>
            <p>Lorem ipsum dolor sit amet ...</p>
            <footer>
              <p>Tags: <strong>#lorem</strong> <strong>#ipsum</strong> <strong>#dolor</strong> <strong>#sit</strong> <strong>#amet</strong></p>
            </footer>
          </article>
        </div>
      </div>
    );
  }
}


export { ExampleModal, ExampleLightbox, ExampleSocialShare };