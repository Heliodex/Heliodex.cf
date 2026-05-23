---
{
	"title": "Bootstrap considered harmful",
	"summary": "",
	"created_at": "2024-01-04 15:10 GMT",
	"published_at": "2024-01-04 15:10 GMT",
	"tags": []
}
---

[Bootstrap](https://getbootstrap.com) is a CSS component library/framework/frontend toolkit/stylesheet set and Javascript plugin collection. It's the most popular CSS framework used on the web, and is a popular choice for many Roblox revival websites.

After writing, modifying, and looking at the source code of many revivals written with Bootstrap and other CSS frameworks, I've come to the conclusion that in it's current state (v5.3.2), I don't like Bootstrap and I don't think it's a good choice for revivals, and perhaps not for a lot of web developers in general.

Here's a list of my biggest pain points with Bootstrap:

-   [Progressive enhancement](#progressive-enhancement)
-   [Modification and customisation](#modification-and-customisation)
-   [Unused scripts and styles](#unused-scripts-and-styles)
-   [Automatic generation or purging of stylesheets](#automatic-generation-or-purging-of-stylesheets)
-   [IDE integration](#ide-integration)

But before we get to those...

## What bootstrap does well

Bootstrap is an excellent choice for local development and making quick prototypes. Not having to worry about where to place lots of styles or scripting basic functions is extremely liberating. Customisation may not be needed at this stage, and as the prototype may only be running locally or be still in development, unused styles or scripts aren't an issue.

Support and documentation for Bootstrap is also excellent. Due to it's popularity, it's easy to find developers in the community who are familiar with it, and tutorials and guides are plentiful. This is especially useful for beginner developers or those wishing to create their first revival, as this includes many existing open-source revival projects to learn from. These are mostly the same reasons that PHP is the most popular server-side language for Roblox revivals, despite it often requiring high levels of skill and experience to use correctly. (I don't have that skill, and this article isn't about PHP anyway.)

Bootstrap also does browser support really well. It's a large and popular framework, so has to support a wide range of browsers. It uses a lot of tricks to provide a consistent cross-browser experience which would be difficult to replicate in a smaller project. And no, we're not talking about the built-in Studio browser, which different Studio years tend to be built on versions of Internet Explorer that were already comically outdated a decade ago, and require some serious black magic f\*\*kery to get any pages working on at an acceptable standard.

However, it's important to remember that bootstrap is a **CSS framework**. It is not, as many people seem to think, a religion. There's also this idea some people have that styling should be done exclusively with Bootstrap and without any other CSS, which is a forlorn hope: it's very likely your site will need more customisation than Bootstrap can provide, no different from any other styling framework.

---

## Progressive enhancement

I'm a huge fan of progressive enhancement, and I try as best as possible to make my websites work without needing Javascript. Bootstrap is certainly far from the worst for this, but it's still not great. Many components require Javascript to work their best, and some don't work at all without it.

Take for example the set of offcanvas/hamburger menu components. They can be used to save valuable screen space on small devices, but progressively enhancing them to work without Javascript almost always means losing out on important accessibility features like screen reader support or keyboard navigation. This is regardless of the fact that hamburger menus are almost always a bad user experience, and can be replaced with bottom-bars, dropdowns, or even the unsightly double (or terrifying triple) navbar so commonly seen on Roblox revivals.

## Modification and customisation

It's no secret that most of modern web design is utterly charmless, and Bootstrap has played no small part in this. Choosing Bootstrap for frontend design may make it more difficult to stand out from other revivals, and to the trained eye, it's easy to spot a Bootstrap website from a mile away.

Bootstrap can be added to a website in a number of ways: manually downloading and selfhosting the CSS and JS files, using a CDN, using prebuilt files from a package manager, or compiling the source files with Sass.

One of the easiest ways to modify Bootstrap is to use a modified version of the prebuilt CSS files, from a service like Bootswatch, Bootstrap Build, or MDB. However, this can be more difficult to maintain, as the files will need to be updated manually whenever Bootstrap is updated. Even worse, if newer Bootstrap features are needed, this may necessitate loading two different versions of Bootstrap on every request, which can cause conflicts and performance issues. This also doesn't solve the uniqueness problem, as the same handful of themes are used by nearly everyone.

Another option is to use Sass to compile Bootstrap from source, and using a small customisation file to modify the look of a select few classes. This also lets Sass variables be modified and certain components to be excluded from the build if desired. However, it isn't always possible to use a build step, and it isn't as beginner friendly. Even if a complex bundling step is added, it can result in the compiler being ran every time a development server is started, which is slow as molasses when compiling over 10 000 lines of CSS every time. I'm in favour of build steps, and I'm in favour of CSS preprocessors like Sass, but not like this.

### Modification after compilation

Bootstrap provides a few ostensibly simple ways to modify the stylesheets after compilation: CSS variables and `!important`. The problem with Bootstrap's use of `!important` is that it leads to specificity issues, difficulty of overriding styles, and an explosion of `!important` properties all over your codebase.

CSS variables aren't much better. Which do you prefer, `--bs-padding-x: 1rem` or `padding-left: 1rem !important; padding-right: 1rem !important`? It's clear that both of these are suboptimal, and will lead to issues if you forget which to use.

## Unused scripts and styles

Let's be real for a minute. How many websites use all of Bootstrap's components and classes? It's easy to exclude certain components from the final CSS bundle with the Sass compiler, but removing unused Javascript is more difficult, and getting rid of never-used `col-xl-11` classes for a project can only be done by monkey-patching the source code. In my experience, Bootstrap is by default over 12 000 lines of CSS and over 8 000 lines of Javascript.

It doesn't stop there, though. I've personally seen websites, including revivals - **especially** revivals, that host 30 000 to 40 000 lines of unused scripts and stylesheets. While this may not be a very useful analogue because I use 80-column line widths, it still results in much bigger bundles and longer page load times.

The idea that "we'll just use the entire thing" is unrealistic. Unless you have an insanely large monolithic project, how are you going to use even 70% of Bootstrap's classes? Bootstrap is often used on revivals alongside FontAwesome or Botostrap Icons, which can both be used in a number of ways, but the method used by most revivals (icon fonts and a huge CSS file) make them just as bad as the problems with Bootstrap.

### But clientside caching!

Caching is great, and works best if loading from a popular CDN, so due to Bootstrap's popularity, it's likely that the user will already have the files cached. However, if you also wish to customise the stylesheets or host them yourself, this is no longer the case. Build steps often change the file hash on every compilation or code change, which means users redownloading the stylesheet. Also, remember that not every browser has caching enabled, and you also have to configure your server to send the correct caching headers.

## Automatic generation or purging of stylesheets

Bootstrap's lack of ability to purge unused styles or generate them on-the-fly may not have been a problem 3-5 years ago, but in the current age of crazy powerful compilers, scoped styles, and atomic CSS engines, it's beginning to show its age. It's a lot faster to purge styles from a giant CSS file than it is to compile a new one every time a change is made, and it's faster still to generate classes when they're needed based on source files and a set of rules.

This restriction forces Bootstrap to use non-linear class names (eg. `p-1`, `p-2`, `p-3`, `p-4`, `p-5`, where `p-5` is twice as much padding as `p-4`) rather than have a ridiculous number of classes for every possible combination of padding, margin, and other styles. This, while not actually a bad design decision, can be confusing or unintuitive.

Don't forget that each class results in more CSS than you might think. A `btn` is just a background, a hover state, and an animation when clicked, right? Nope, have 20 CSS variables, another 20 classes for applying those variables, another 10 variables for when you want to add a customisation class like `btn-primary`, and sprinkle on some `--bs-btn-font-size: 0.75rem` to taste.

## IDE integration

I've settled on VSCode (insiders) as my main editor for various reasons, and one of its biggest selling points is its huge extension ecosystem. Loads of CSS frameworks have extensions for VSCode that provide autocompletion, documentation, and other useful features. No, this section won't be relevant if you're a XlXi-type Notepad++ user or an endlessweb code-directly-within-the-management-page source-control-what's-that?-type user.

There are a boatload of community-maintained unofficial extensions for snippets, integrations with other popular libraries, and even autocomplete for all of Bootstrap's classes. Although, these are often targeted towards older versions of Bootstrap, and since there are many standard ways to customise the library, can't have the context to provide useful suggestions a lot of the time. I'm still unable to hover over a class and see the documentation or source code for it, and I don't think there are any conventions or formatters for enforcing order of class names, which results in a lot of inconsistency.

This is compounded by the fact that I believe Bootstrap's classes are fairly unintuitive as to what the underlying CSS is. As an example, Bootstrap's grid system is basically a thin wrapper around flexbox, occasionally acts like CSS grid (different, and they have a different grid system for this as well), requires classes like `container`, `row`, and `col`, and is seemingly worse than both flexbox and CSS grid: with flexbox, only a `display: flex` element is needed and the children can be given widths accordingly, and with CSS grid, widths can be defined on the parent element rather than duplicated across each child.

---

## Alternatives

Year over year, the percentage of developers using Bootstrap has been decreasing, the percentage of developers stating they wouldn't use Bootstrap again has been growing fast, and the framework is consistently rated badly on a multitude of developer surveys. From using Bootstrap as well as a few other styling systems in many projects, I've decided which other solutions are most suitable for revivals, and allow for development at a similar or faster speed.

It's always possible to write CSS normally, which can work well if you're just starting out or have a small project, though stylesheets can be difficult to maintain and organise as a project grows. If you're using scoped CSS, this problem is lessened drastically though. As CSS evolves and gets better over time, the popularity of CSS frameworks as a whole is slowly decreasing, so definitely don't rule out writing your own CSS as an option.

There's also the option of using old Roblox stylesheets, often taken from the Internet Archive. These can often be outdated or not work effectively on modern browsers, and people often make the mistake of using archive.org as a CDN. Do not use archive.org as a CDN. Do not use archive.org as a CDN. Do not use archive.org as a CDN.

Here's a list of my thoughts on a number of exciting frontend and styling frameworks.

### [Tailwind CSS](https://tailwindcss.com)

Tailwind might be the most obvious replacement for Bootstrap at the moment, and is a common choice for newer revivals. It's an atomic CSS framework, meaning it provides very basic classes for widths, padding, and display, resulting in HTML that looks like `class="w-1/2 p-5 flex"` (If you're not already put off by what Bootstrap HTML looks like, you shouldn't be put off by this). Rather than having each class linked to a wide range of behaviours, they almost always correspond to one declaration of CSS, with perhaps a `--tw-whatever` variable to prevent overrides or duplication (never needing to be accessed by the developer though).

Modifiers like `dark:` and `hover:` can always be prepended as well. If you need a one-off class, then you can always add brackets like `pb-[174px]` or `bg-[#bada55]`. Even having 50 classes only used once is still better than having 25 never-used classes imo.

Tailwind also provides a range of hand-picked colours that can be used in classes like `bg-orange` or `text-zinc`, each allowing a range of shades and opacities by appending numbers on the end `text-emerald-600/50`. Bootstrap provides a similar range of colours via CSS and Sass variables, but these are generated from tinting or shading a base colour, and are often not as eye-pleasing as Tailwind's. Bootstrap's colours tend to lock you into a certain colour scheme, colouring buttons and inputs based on actions, which is a bad practice that makes the website's styles look jumbled and disorganised.

Tailwind doesn't provide any components or JS behaviour by default, and are most useful in a component framework to keep code duplication to a minimum. If you're a skilled frontend master, these interactive components may be trivial to code by hand, but there are also a range of component libraries built atop Tailwind to make this easier.

A development library is also provided to allow for quick prototyping without scaffolding a complex project base, and in a full project, the JIT compiler scans your source code to generate only the necessary classes, and produces small output files. IDE integration is also excellent, allowing autocompletion, documentation, formatting and ordering classes, and viewing source code. I could go on and on, Tailwind provides a top-class developer and user experience.

The book by the creators of Tailwind, [Refactoring UI](https://www.refactoringui.com), is an absolute must-read for anyone who wants to make their website look good. It starts off with some very simple tips on what and what not to do, and if you're familiar with Bootstrap, you'll quickly realise Bootstrap heavily pigeonholes your design into a certain style, and that you can do so much better. It never explicitly mentions any CSS libraries, but it's clear that as many of the design methods shown in the book are used by Tailwind. Just pirate it, I don't care as long as it makes your designs look that much better.

### [DaisyUI](https://daisyui.com)

DaisyUI is a component library built on top of Tailwind, and has been used on a number of revivals. It may appear to provide classes similar to that of Bootstrap with `btn`, `btn-primary`, `btn-lg`, etc, but rather than containing a wide array of CSS variables, they encapsulate a number of Tailwind classes under one name, making use of Tailwind's `@apply` directive. This allows them to be customised easily by adding more tailwind classes.

DaisyUI also provides a number of components that are missing from Tailwind, such as dropdowns, accordions, and modals. Very few of their components require Javascript, and those that do offer legacy methods that work just as well. This offers excellent opportunity for progressive enhancement. Any Javascript that is used isn't even managed by the library, instead relying on very simple inline functions or updating basic CSS variables.

Even if you're not using Tailwind, it's trivial to port their component stylesheets to work with plain CSS, so they can be copied into your project to be customised and culled as needed. We used this method to incorporate several components into the Mercury revival, which has worked really well so far.

### [Skeleton](https://www.skeleton.dev)

I'm usually not a huge fan of framework-specific component libraries, as they can be difficult to tree-shake or progressively enhance, but I'll make an exception for this one. Skeleton is a UI toolkit built upon Svelte and Tailwind. It's been used in a number of trailblazing revivals including Yalp (IIRC, Yalp has also previously used DaisyUI) and Meteorite, and while I haven't used it, I've been following its development closely since beta versions.

Many of their components don't work without clientside Javascript, but they follow great accessibility guidelines and allow for very easy interactivity. Theming is also really simple, and a number of presets are provided which look brilliant, as well as wrappers around Svelte's brilliant transition system.

### [UnoCSS](https://unocss.dev)

UnoCSS is a CSS engine that allows for on-the-fly generation of stylesheets based on a set of rules and source files. It's essentially a bring-your-own-Tailwind, and is even faster than Tailwind's JIT compiler, while also being easier to set up and use.

Rules are defined based on a simple regular expression, for example `/^p-([\.\d]+)$` allows classes of `p-1`, `p-0.7`, `p-65536`. This can be passed to a function to generate an object, like `` { padding: `${num / 4}rem` } ``, and bada bing bada boom, you've basically got Tailwind's margin class. This is really simple yet powerful, and allows for serious customisation.

However, if you're currently using Bootstrap and wish to decrease your bundle size, this is where UnoCSS really shines. Firstly, remove a lot of classes that are repetitive or unused, like the gap, margin, grid, and padding classes. Then turn these into simple regular expressions and apply them to UnoCSS rules, and this allows you to cut out a huge amount of unused CSS, not to mention it allows much more flexibility in properties and values. This can help you migrate away from Bootstrap, and is also really useful with icon libraries that provide a huge number of classes for every icon, so only the icons you use are included in the final stylesheet.

UnoCSS also provides a number of official and community-maintained presets (which are easy to make yourself!), including the default Uno preset, which encapsulates styles from Bootstrap, Tailwind, Windi, and Tachyons, so you can use whatever you feel most comfortable with. Since it generates based on custom regular expressions, you can add whatever units you wish on them, without the need for Tailwind's square brackets.

A number of transformers are made available as well, including ones that allow classes to be added as attributes, that compile multiple clasess down into a single declaration, and ones that allow classes with modifiers to be grouped: `hover:(bg-blue-500 text-white)`. Due to this and a number of other reasons, I think it's strictly better than Tailwind for most purposes.

A VSCode extension is also available which matches that of Tailwind's, and its autocomplete provides suggestions based on your own rules, which can also be customised.

### [Pico.css](https://picocss.com)

Don't like messy HTML, don't like JS, or even don't like classes at all? Pico is a dead simple library for web dev purists that provides styles for a number of raw HTML components, and there's even a version that can be used without any clasess at all, instead embracing semantic HTML and aria labels. It comes in a few versions, the smaller ones being about the size of my UnoCSS bundle, and the larger ones providing a simple and effective light/dark mode system.

Pico provides a grid system that is much simpler than Bootstrap's, and certainly doesn't need classes for every single column. Also unlike Bootstrap, it's simple enough that it's feasible to use the entire thing across a project, and of course scores perfectly on progressive enhancement. All of its classes are very multi-purpose, and provides examples for being used alongside Bootstrap's grid system.

Though I haven't used it, its simple design appeals greatly to me, and I think its components look better than Bootstrap's, some even better than DaisyUI's default ones. Its documentation is dead simple as well; you'd think there's something missing, but that's really all there is to it.

### [Master.co](https://css.master.co)

Though I haven't used Master either, it's clear that it's nothing like the library directly above. From a first look, I'd call it Tailwind on crack. It's a lot more powerful, allowing easy combining of classes into single declarations, and even letting you interpolate values into classes and modify them with Javascript (or with the framework of your choice) at runtime through a technique called Progressive Rendering, whereas UnoCSS and Tailwind both require the classes to be visible in the source code. It does look more integrated into your source code and may require more work to set up properly, but this is clearly for good reason.

Master's intention isn't to let you write vanilla CSS. Their language is powerful enough that an entire declaration block can be written in a single class name, and these class names get pretty long, even with shorthands like `@fade|1s|ease @delay:300ms:hover ~opacity|3s p:16|32 b:1|red m:10|20|30|40 f:32 jc:center! box-shadow:1|2|3|blue@sm`, variables like `$color:red:hover $size:5rem@sm`, selectors like `bg:slate-90::scrollbar font:bold_:where(h1,h2,h3,h4,h5,h6) text:center>#id box:border_*`, and groups like `{block;f:14;text:center}>li:hover@md`. It looks to me like it would be a steep learning curve, and writing it would be an intense experience, but could unlock some serious customisation and productivity gains.

Its IDE plugin provides everything that Tailwind's and UnoCSS's does, as well as syntax highlighting for declarations, linting, and checking for class collisions and ordering. I'd recommend it to experienced developers who want something even more powerful than Tailwind or UnoCSS, but it's not the best choice for CSS beginners.

---

## Conclusion

While Bootstrap does a lot of things well, it doesn't hold up in the age of modern web development, and can't compete with other frameworks in terms of customisation, performance, or developer experience. For revivals, while it might be more effort to write your own CSS or use a smaller framework, it's worth it in the long run, and will result in better user and developer experiences.

If Bootstrap were to implement some of the features available in other CSS libraries in a potential Bootstrap 6.0, I'd take a look at it again and consider using it, and I absolutely feel that it could make a comeback in a big way. Until then, UnoCSS and presets are my favourite solution for personal websites.

> whew, 3700 is lot of words to say "tail wind > boot strap"
