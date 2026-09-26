import re

files = [
    'src/components/common/navbar.tsx',
    'src/components/common/footer.tsx',
    'src/components/sections/trust-bar.tsx'
]

replacements = {
    r'bg-\\[#FAF8F5\\]': 'bg-background',
    r'bg-\\[#FAF8F5\\]/80': 'bg-background/80',
    r'text-\\[#1C252C\\]': 'text-foreground',
    r'hover:text-\\[#1C252C\\]': 'hover:text-foreground',
    r'border-\\[#E2DACD\\]': 'border-border',
    r'hover:text-\\[#0F4C5C\\]': 'hover:text-primary',
    r'bg-\\[#D62828\\]': 'bg-accent',
    r'bg-\\[#E0A96D\\]': 'bg-secondary',
    r'hover:bg-\\[#C89255\\]': 'hover:bg-secondary-hover',
    r'bg-\\[#0F4C5C\\]': 'bg-primary',
    r'text-\\[#E2DACD\\]': 'text-white/80',
    r'ring-\\[#E0A96D\\]': 'ring-secondary',
    r'text-\\[#E0A96D\\]': 'text-secondary',
    r'bg-\\[#E2DACD\\]/50': 'bg-muted',
    r'hover:bg-\\[#E2DACD\\]/50': 'hover:bg-muted',
    r'border-\\[#E2DACD\\]/50': 'border-border',
    
    # trust-bar mappings
    r'bg-stone-900': 'bg-muted',
    r'border-stone-800': 'border-border',
    r'text-amber-500': 'text-secondary',
    r'text-stone-100': 'text-foreground',
    r'text-stone-400': 'text-foreground/70',
    r'bg-stone-800/50': 'bg-background/50',
    r'border-stone-700/50': 'border-border'
}

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done replacing.')
