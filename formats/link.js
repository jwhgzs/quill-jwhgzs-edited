import Inline from '../blots/inline';

/* JWHGZS.COM edited here !!! */

function ___escape(value) {
  return value.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
}
function ___wrap(value) {
  return 'javascript: quillJump("' + ___escape(value) + '");';
}

class Link extends Inline {
  static create(value) {
    let node = super.create(value);
    value = this.sanitize(value);
    /* eslint no-script-url: "off" */
    node.setAttribute('real-href', value);
    node.setAttribute('href', ___wrap(value));
    // node.setAttribute('rel', 'noopener noreferrer');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('real-href');
  }

  static sanitize(url) {
    // return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    return url;
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) return super.format(name, value);
    // value = this.constructor.sanitize(value);
    this.domNode.setAttribute('real-href', value);
    this.domNode.setAttribute('href', ___wrap(value));
  }
}
Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];


function sanitize(url, protocols) {
  let anchor = document.createElement('a');
  anchor.href = url;
  let protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}


export { Link as default, sanitize };
