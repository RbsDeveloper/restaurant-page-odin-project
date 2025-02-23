

export function contact () {
    const content = document.getElementById('content')
    const create = (tag) => document.createElement(tag);

    const contactComponent = create('div');
    contactComponent.classList.add('contactWrapper');

    const infoSection = create('div');
    infoSection.classList.add('infoSection');
    
    const address = create('div');
    address.classList.add('address');
    address.appendChild(create('h3')).textContent = '123 Blendy Lane';
    address.appendChild(create('p')).textContent = 'Smoothieville';
    address.appendChild(create('p')).textContent = 'Tropica 90210';

    const help = create('div');
    help.classList.add('help')
    help.appendChild(create('h3')).textContent ='Support';
    help.appendChild(create('p')).textContent ='ohno@blendedagain.com';
    help.appendChild(create('p')).textContent ='1-800-SMOOTH-IT';
    help.appendChild(create('p')).textContent ='Refund Policy: If your smoothie isn’t smooth, we’ll make it right… or at least smoother!';

    const social = create('div');
    social.classList.add('.social');

    const facebook = create('a');
    facebook.classList.add('facebook')
    facebook.appendChild(create('i')).classList.add('fa-brands', 'fa-facebook');
    const instagram = create('a');
    instagram.classList.add('instagram')
    instagram.appendChild(create('i')).classList.add('fa-brands', 'fa-instagram');
    social.appendChild(facebook);
    social.appendChild(instagram);

    infoSection.appendChild(address);
    infoSection.appendChild(help);
    infoSection.appendChild(social);

    const formSide = create('div');
    formSide.classList.add('formSide');

    const form = create('form');
    form.classList.add('conForm');

    const addInputField = (labelText, type, placeholder) => {
    const label = create('label');
    label.textContent = labelText;
    label.setAttribute('for', labelText.toLowerCase());

    const input = create(type);
      input.placeholder = placeholder;
      form.appendChild(label);
      form.appendChild(input);
   }

   addInputField('Name', 'input', 'Your name');
   addInputField('Email', 'input', 'your@Email.com');

   const label = create('label');
   label.textContent = 'Comments';
   label.setAttribute('for', 'comments');

   const textarea = create('textarea');
   textarea.rows = 6;
   textarea.cols = 50;
   textarea.placeholder = 'Write here...';

   form.appendChild(label);
   form.appendChild(textarea);

   formSide.appendChild(form);
   contactComponent.appendChild(infoSection);
   contactComponent.appendChild(formSide);
   content.appendChild(contactComponent);
}