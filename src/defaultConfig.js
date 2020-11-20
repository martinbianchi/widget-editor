const everyMonthOptions = {
    currency: 'USD', // Currency to display
    monthly: {
      levels: [ // Different choices in monthly donation
        { amount: '25', bgColor: '#BCD9DD', img: "https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" },
        { amount: '50', bgColor: '#F4BF86', img: "https://images.unsplash.com/photo-1579890002580-841359ca1aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", default: true },
        { amount: '100', bgColor: '#A0CBFE', img: "https://images.unsplash.com/photo-1598846019232-a5752b94c3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80" },
        { amount: 'custom', bgColor: '#BCD9DD', img: 'https://images.unsplash.com/photo-1602199926649-2e5e447bab97?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' }
      ],
    },
    oneTime: {
      levels: [10, 20, 30, 50, 100, 200], // Different choices in one time donation
      allowCustom: true, // Allow enter custom amount in one time donation
      bgColor: '#BCD9DD',
      img: 'https://images.unsplash.com/photo-1602199926649-2e5e447bab97?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
    },
    // Configure action when the user submit the donation in the widget.
    // You can pass to us the following parameters to customize it or listen to the callback
    onSubmit: {
      charity: 'your-foundation',
      params: {
        share_info: 1,
        no_exit: 1,
      }
    },
    // Both ways supported
    // onSubmit: ({amount, frequency}) => { console.log(amount, frequency)},
    i18n: {
      // Different languages of the widget.
      // The keys used here (en, es) are the keys used to change the language via Attrs or Javascript.
      // By default we use the key "en".
      en: {
        company: {
          logo: 'https://i.ibb.co/VDKGT2r/logo-dummy.png',
          name: 'Coral\'s Guardians',
          location: 'San Andrés, Colombia',
        },
        monthly: {
          logo: {
            header: 'Monthly donation',
            text: 'on <link>every.org</link>',
            link: 'https://every.org',
          },
          header: 'This is a headline, which could be two lines long.',
          info: 'Monthy gifts help nonprofits focus on their mission and long-term impact',
          levels: [
            {
              amount: '25',
              name: 'Sponge Supporter',
              description1: 'As a <bold>Sponge Supporter</bold>, you will be helping us with this and that and this and that and this.',
              description2: 'We deliver groundbreaking projects, innovative research and inspiring educational content to engage the public, support science and accelerate actions vital to the preservation of coral reefs.'
            },
            {
              amount: '50',
              name: 'Friend of the reef',
              description1: 'As a <bold>Friend of the reef</bold> you will be helping us with this and that and this and that and this.',
              description2: 'We deliver groundbreaking projects, innovative research and inspiring educational content to engage the public, support science and accelerate actions vital to the preservation of coral reefs.'
            },
            {
              amount: '100',
              name: 'Coral Champion',
              description1: 'As a <bold>Coral Champion</bold> you will help us develop the first dynamic map of known ancestral uses of fungi.',
              description2: 'We deliver groundbreaking projects, innovative research and inspiring educational content to engage the public, support science and accelerate actions vital to the preservation of coral reefs.'
            },
          ],
          custom: {
            label: 'Custom',
            placeholder: 'Enter amount',
            description1: "With your support we will promote do things like this and that",
            description2: 'We deliver groundbreaking projects, innovative research and inspiring educational content to engage the public, support science and accelerate actions vital to the preservation of coral reefs..'
          },
          button: 'Donate {{amount}} every month',
          switch: 'Or make a <action>One Time Donation</action>'
        },
        oneTime: {
          logo: {
            header: 'One time donation',
            text: 'on <link>every.org</link>',
            link: 'https://every.org',
          },
          name: 'One time donation',
          header: 'This is another headline, which could be two lines long.',
          info: 'Thank you for supporting the mission of the foundation!',
          custom: {
            placeholder: 'Enter custom amount'
          },
          description: 'We deliver groundbreaking projects, innovative research and inspiring educational content to engage the public, support science and accelerate actions vital to the preservation of coral reefs.',
          button: 'Donate {{amount}}',
          switch: 'Or make a <action>Monthly donation</action>'
        },
        footer: 'You will be redirected to a secure page on Every.org to complete your donation.'
      },
      es: {
        company: {
          logo: 'https://i.ibb.co/VDKGT2r/logo-dummy.png',
          name: 'Guardianes del coral',
          location: 'San Andrés, Colombia',
        },
        monthly: {
          logo: {
            header: 'Donación mensual',
            text: 'en <link>every.org</link>',
            link: 'https://every.org',
          },
          header: 'Este es un headline, que puede tener dos lineas.',
          info: 'Las ayudas mensuales ayudan a las fundaciones a enfocarse en su misión y generar impacto a largo plazo',
          levels: [
            {
              amount: '25',
              name: 'Soporte Esponjoso',
              description1: 'Como <bold>Soporte Esponjoso</bold>, nos ayudaras a nosotros a lograr estas cosas y ademas estas otras',
              description2: 'Llevamos a cabo proyectos revolucionarios, investigación innovadora y contenido educativo inspirador para involucrar al público, apoyar la ciencia y acelerar las acciones vitales para la preservación de los arrecifes de coral.'
            },
            {
              amount: '50',
              name: 'Amigo del Arrecife',
              description1: 'Como <bold>Amigo del Arrecife</bold>, nos ayudaras a nosotros a lograr estas cosas y ademas estas otras',
              description2: 'Llevamos a cabo proyectos revolucionarios, investigación innovadora y contenido educativo inspirador para involucrar al público, apoyar la ciencia y acelerar las acciones vitales para la preservación de los arrecifes de coral.'
            },
            {
              amount: '100',
              name: 'Campeón del Coral',
              description1: 'Como <bold>Campeón del Coral</bold>, nos ayudaras a nosotros a lograr estas cosas y ademas estas otras',
              description2: 'Llevamos a cabo proyectos revolucionarios, investigación innovadora y contenido educativo inspirador para involucrar al público, apoyar la ciencia y acelerar las acciones vitales para la preservación de los arrecifes de coral.'
            },
          ],
          custom: {
            label: 'Personalizado',
            placeholder: 'Ingrese el monto',
            description1: 'Con tu aporte cuidaremos los arrecifes de coral del caribe',
            description2: 'Llevamos a cabo proyectos revolucionarios, investigación innovadora y contenido educativo inspirador para involucrar al público, apoyar la ciencia y acelerar las acciones vitales para la preservación de los arrecifes de coral.'
          },
          button: 'Donar {{amount}} cada mes',
          switch: 'O haga una <action>Donación única</action>'
        },
        oneTime: {
          logo: {
            header: 'Donación única',
            text: 'en <link>every.org</link>',
            link: 'https://every.org',
          },
          header: '¡Tu aporte hace la diferencia!',
          info: '¡Gracias por apoyar la misión de la fundación!',
          custom: {
            placeholder: 'Introduzca la cantidad deseada'
          },
          description: 'Llevamos a cabo proyectos revolucionarios, investigación innovadora y contenido educativo inspirador para involucrar al público, apoyar la ciencia y acelerar las acciones vitales para la preservación de los arrecifes de coral.',
          button: 'Donar {{amount}}',
          switch: 'O haga una <action>Donación mensual</action>'
        },
        footer: 'Serás redireccionado a Every.org para completar la donación.'
      }
    }
  }
  
  export default everyMonthOptions