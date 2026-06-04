FROM scratch

# Enterprise-grade container for the most tuff project
COPY README.md /README.md

CMD ["cat", "/README.md"]
