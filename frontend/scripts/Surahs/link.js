const surah = (number, name) =>
`
<div class="surah__link" data-theme>
    <a href="/surah.html?${number}" data-theme data-font>
        <span> ${name}</span> 
        <span> (${number})</span>
    </a>
</div>
`;

export default surah