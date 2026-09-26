const fs = require('fs');

const files = [
    'src/components/common/navbar.tsx',
    'src/components/common/footer.tsx',
    'src/components/sections/trust-bar.tsx'
];

const replacements = {
    'bg-[#FAF8F5]/80': 'bg-background/80',
    'bg-[#FAF8F5]': 'bg-background',
    'text-[#1C252C]': 'text-foreground',
    'hover:text-[#1C252C]': 'hover:text-foreground',
    'border-[#E2DACD]/50': 'border-border',
    'border-[#E2DACD]': 'border-border',
    'hover:text-[#0F4C5C]': 'hover:text-primary',
    'bg-[#D62828]': 'bg-accent',
    'hover:bg-[#C89255]': 'hover:bg-secondary-hover',
    'bg-[#E0A96D]': 'bg-secondary',
    'hover:bg-[#E0A96D]': 'hover:bg-secondary-hover',
    'bg-[#0F4C5C]': 'bg-primary',
    'text-[#E2DACD]': 'text-white/80',
    'ring-[#E0A96D]': 'ring-secondary',
    'text-[#E0A96D]': 'text-secondary',
    'bg-[#E2DACD]/50': 'bg-muted',
    'hover:bg-[#E2DACD]/50': 'hover:bg-muted',
    
    // trust-bar mappings
    'bg-stone-900': 'bg-background',
    'border-stone-800': 'border-border',
    'text-amber-500': 'text-secondary',
    'text-stone-100': 'text-foreground',
    'text-stone-400': 'text-foreground/70',
    'bg-stone-800/50': 'bg-muted',
    'border-stone-700/50': 'border-border'
};

for (const filePath of files) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        for (const [search, replacement] of Object.entries(replacements)) {
            content = content.split(search).join(replacement);
        }
        fs.writeFileSync(filePath, content, 'utf-8');
    }
}

console.log('Done replacing.');
