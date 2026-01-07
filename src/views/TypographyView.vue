<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <MainNav />
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-4">Typography</h1>
      <p class="text-lg text-muted-foreground mb-8">
        Beautiful typographic defaults using @tailwindcss/typography
      </p>

      <!-- Prose Basic Example -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Basic Prose</h2>
        <p class="text-sm text-muted-foreground mb-4">
          Wrap any HTML content in the <code class="text-xs bg-muted px-1 py-0.5 rounded">prose</code> class for beautiful typography
        </p>

        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <h1>The Joke Tax Chronicles</h1>
            <p class="lead">
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>

            <h2>The King's Plan</h2>
            <p>
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow,
              in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
              couldn't help but laugh. And once they started laughing, they couldn't stop.
            </p>

            <h3>The People Rejoice</h3>
            <p>
              The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
              Jokester was declared a hero, and the kingdom lived happily ever after.
            </p>

            <blockquote>
              "Laughter is the best medicine, and the joke tax was the worst disease."
            </blockquote>

            <h4>Key Lessons</h4>
            <ul>
              <li>Happiness cannot be taxed</li>
              <li>Laughter brings people together</li>
              <li>Sometimes the simplest solution is the best</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Prose Sizes -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Prose Sizes</h2>
        <p class="text-sm text-muted-foreground mb-4">
          Use size modifiers: <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-sm</code>,
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-base</code> (default),
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-lg</code>,
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-xl</code>,
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-2xl</code>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Small -->
          <div class="border rounded-lg p-4 bg-card">
            <p class="text-sm font-medium mb-3">prose-sm</p>
            <article class="prose prose-sm dark:prose-invert">
              <h3>Small Size</h3>
              <p>Perfect for compact layouts and side notes. The quick brown fox jumps over the lazy dog.</p>
            </article>
          </div>

          <!-- Base -->
          <div class="border rounded-lg p-4 bg-card">
            <p class="text-sm font-medium mb-3">prose (base)</p>
            <article class="prose dark:prose-invert">
              <h3>Base Size</h3>
              <p>Default size for most content. The quick brown fox jumps over the lazy dog.</p>
            </article>
          </div>

          <!-- Large -->
          <div class="border rounded-lg p-4 bg-card">
            <p class="text-sm font-medium mb-3">prose-lg</p>
            <article class="prose prose-lg dark:prose-invert">
              <h3>Large Size</h3>
              <p>Great for blog posts and articles. The quick brown fox jumps over the lazy dog.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Theme Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Theme Integration</h2>
        <p class="text-sm text-muted-foreground mb-4">
          This project uses shadcn's theming system, so prose automatically adapts to your active theme
          (Default, Blue, or Twilight Violet). No need for <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-slate</code>
          or other color modifiers - just use <code class="text-xs bg-muted px-1 py-0.5 rounded">prose dark:prose-invert</code>!
        </p>

        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <h3>Theme-Aware Typography</h3>
            <p>
              This content automatically matches your current theme. Try switching themes using the
              theme selector in the navigation to see the colors adapt! The typography uses shadcn's
              CSS variables like <code>--foreground</code>, <code>--muted-foreground</code>, and
              <code>--primary</code> instead of hardcoded colors.
            </p>
            <a href="#">Links use your theme's primary color</a>
            <p>
              This approach ensures consistency across your entire application and makes your content
              look great in any theme.
            </p>
          </article>
        </div>
      </section>

      <!-- Lists -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Lists</h2>
        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <h3>Unordered List</h3>
            <ul>
              <li>First item in the list</li>
              <li>Second item with more content to demonstrate wrapping</li>
              <li>Third item with a nested list:
                <ul>
                  <li>Nested item one</li>
                  <li>Nested item two</li>
                  <li>Nested item three</li>
                </ul>
              </li>
              <li>Fourth item</li>
            </ul>

            <h3>Ordered List</h3>
            <ol>
              <li>Install dependencies</li>
              <li>Configure your project settings</li>
              <li>Run the development server</li>
              <li>Build for production:
                <ol>
                  <li>Run build command</li>
                  <li>Test production build</li>
                  <li>Deploy to server</li>
                </ol>
              </li>
              <li>Monitor performance</li>
            </ol>
          </article>
        </div>
      </section>

      <!-- Links and Inline Elements -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Links & Inline Elements</h2>
        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <p>
              This paragraph contains <a href="#">a regular link</a> and <strong>bold text</strong> and
              <em>italic text</em> and <code>inline code</code>. You can also use <kbd>Ctrl</kbd>+<kbd>C</kbd>
              for keyboard shortcuts.
            </p>
            <p>
              Here's a link to the <a href="https://tailwindcss.com/docs/typography-plugin">official documentation</a>
              with <code>className</code> examples and more.
            </p>
          </article>
        </div>
      </section>

      <!-- Blockquotes and Code -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Blockquotes & Code Blocks</h2>
        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <blockquote>
              "The best way to predict the future is to invent it." — Alan Kay
            </blockquote>

            <p>Here's how to use the prose class in your Vue component:</p>

            <pre><code>&lt;template&gt;
  &lt;article class="prose dark:prose-invert"&gt;
    &lt;h1&gt;Your Content&lt;/h1&gt;
    &lt;p&gt;Beautiful typography automatically applied!&lt;/p&gt;
  &lt;/article&gt;
&lt;/template&gt;</code></pre>

            <p>
              You can also use inline <code>code snippets</code> like this within your paragraphs.
            </p>
          </article>
        </div>
      </section>

      <!-- Tables -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Tables</h2>
        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <table>
              <thead>
                <tr>
                  <th>Modifier</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>prose-sm</code></td>
                  <td>Smaller text size</td>
                  <td>Compact layouts</td>
                </tr>
                <tr>
                  <td><code>prose-lg</code></td>
                  <td>Larger text size</td>
                  <td>Blog posts</td>
                </tr>
                <tr>
                  <td><code>prose-xl</code></td>
                  <td>Extra large text</td>
                  <td>Hero content</td>
                </tr>
                <tr>
                  <td><code>dark:prose-invert</code></td>
                  <td>Dark mode support</td>
                  <td>Theme switching</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>

      <!-- Element Modifiers -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Element Modifiers</h2>
        <p class="text-sm text-muted-foreground mb-4">
          Customize specific elements within prose using element modifiers like
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-a:text-blue-600</code>,
          <code class="text-xs bg-muted px-1 py-0.5 rounded">prose-headings:font-bold</code>
        </p>

        <div class="space-y-6">
          <!-- Custom Link Color -->
          <div class="border rounded-lg p-6 bg-card">
            <p class="text-sm font-medium mb-3">Custom link color (prose-a:text-primary)</p>
            <article class="prose dark:prose-invert prose-a:text-primary max-w-none">
              <p>
                This paragraph has <a href="#">links styled with the primary theme color</a> instead
                of the default blue.
              </p>
            </article>
          </div>

          <!-- Custom Headings -->
          <div class="border rounded-lg p-6 bg-card">
            <p class="text-sm font-medium mb-3">Custom headings (prose-headings:text-primary prose-headings:font-extrabold)</p>
            <article class="prose dark:prose-invert prose-headings:text-primary prose-headings:font-extrabold max-w-none">
              <h3>This Heading is Customized</h3>
              <p>All headings in this prose block use the primary color and extra bold weight.</p>
            </article>
          </div>

          <!-- No Underline Links -->
          <div class="border rounded-lg p-6 bg-card">
            <p class="text-sm font-medium mb-3">No underline links (prose-a:no-underline prose-a:text-foreground hover:prose-a:text-primary)</p>
            <article class="prose dark:prose-invert prose-a:no-underline prose-a:text-foreground hover:prose-a:text-primary max-w-none">
              <p>
                These <a href="#">links have no underline</a> and change color on hover for a
                <a href="#">cleaner appearance</a>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- not-prose Example -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Excluding Elements with not-prose</h2>
        <p class="text-sm text-muted-foreground mb-4">
          Use <code class="text-xs bg-muted px-1 py-0.5 rounded">not-prose</code> to exclude specific
          elements from prose styling (like shadcn components)
        </p>

        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert max-w-none">
            <h3>Article with Components</h3>
            <p>
              This article contains regular prose content, but the button below is excluded from
              prose styling using the <code>not-prose</code> class.
            </p>

            <div class="not-prose">
              <Button>This Button Keeps Its Styles</Button>
              <Button variant="outline" class="ml-2">And This One Too</Button>
            </div>

            <p>
              The content continues with normal prose styling after the excluded elements. This is
              perfect for embedding interactive components within your content.
            </p>
          </article>
        </div>
      </section>

      <!-- Responsive Example -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Responsive Typography</h2>
        <p class="text-sm text-muted-foreground mb-4">
          Use responsive modifiers: <code class="text-xs bg-muted px-1 py-0.5 rounded">prose md:prose-lg lg:prose-xl</code>
        </p>

        <div class="border rounded-lg p-6 bg-card">
          <article class="prose md:prose-lg lg:prose-xl dark:prose-invert max-w-none">
            <h3>Responsive Sizing</h3>
            <p>
              This content starts small on mobile, increases to large on tablets, and becomes
              extra large on desktop screens. Resize your browser to see the difference!
            </p>
          </article>
        </div>
      </section>

      <!-- Full Article Example -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Complete Article Example</h2>
        <div class="border rounded-lg p-6 bg-card">
          <article class="prose dark:prose-invert lg:prose-lg max-w-none">
            <h1>Getting Started with Tailwind Typography</h1>

            <p class="lead">
              The @tailwindcss/typography plugin provides a set of prose classes you can use to add
              beautiful typographic defaults to any vanilla HTML you don't control.
            </p>

            <h2>Installation</h2>
            <p>Install the plugin from npm:</p>
            <pre><code>npm install -D @tailwindcss/typography</code></pre>

            <p>Then add it to your CSS file:</p>
            <pre><code>@import 'tailwindcss';
@plugin '@tailwindcss/typography';</code></pre>

            <h2>Basic Usage</h2>
            <p>
              Now you can use the <code>prose</code> class to add sensible typography styles to any
              vanilla HTML:
            </p>

            <ul>
              <li>Headings are automatically sized and weighted</li>
              <li>Paragraphs have proper line height and spacing</li>
              <li>Lists are beautifully formatted</li>
              <li>Code blocks are styled with monospace fonts</li>
              <li>Links are colored and underlined</li>
            </ul>

            <h3>Key Features</h3>
            <ol>
              <li><strong>Responsive by default</strong> — Use modifiers like <code>md:prose-lg</code></li>
              <li><strong>Dark mode support</strong> — Add <code>dark:prose-invert</code></li>
              <li><strong>Theme integration</strong> — Automatically matches your shadcn theme colors</li>
              <li><strong>Element customization</strong> — Use modifiers like <code>prose-a:text-primary</code></li>
            </ol>

            <blockquote>
              "Typography is the craft of endowing human language with a durable visual form."
              — Robert Bringhurst
            </blockquote>

            <h2>Conclusion</h2>
            <p>
              The Tailwind Typography plugin is perfect for blog posts, documentation, CMS content,
              or any situation where you need beautiful typography without manually styling every element.
            </p>

            <p>
              For more information, check out the
              <a href="https://github.com/tailwindlabs/tailwindcss-typography">official documentation</a>.
            </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
