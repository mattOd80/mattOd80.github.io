const App = ({ org_html, children }) => <div id="your-resume">
    Some really awesome content
    <div id='org-root' dangerouslySetInnerHTML={{ __html: org_html.replace('class="entry"', 'class="entry entry-spa"') }} />
    { children }
</div>