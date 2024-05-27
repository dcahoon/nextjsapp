This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Cards
    Cards.byId (id: string): Promise<Card>;
    Cards.byName (name: string, set?: string, fuzzy = false): Promise<Card>;
    Cards.bySet (code: string, collectorNumber: string | number, lang?: string): Promise<Card>;
    Cards.byMultiverseId (id: number): Promise<Card>;
    Cards.byMtgoId (id: number): Promise<Card>;
    Cards.byArenaId (id: number): Promise<Card>;
    Cards.byTcgPlayerId (id: number): Promise<Card>;
    Cards.byCardmarketId (id: number): Promise<Card>;
    Cards.search (query: string, options?: SearchOptions | number): MagicEmitter<Card>;
    Cards.random (query?: string): Promise<Card>;
    Cards.autoCompleteName (name: string): Promise<string[]>;
    Cards.collection (...collection: CardIdentifier[]): MagicEmitter<Card>;
    Cards.setSymbologyTransformer (transformer?: string | SymbologyTransformer): void
    Card
    Card.getSet (): Promise<Set>
    Card.getPrints (): Promise<Card[]>
    Card.getRulings (): Promise<Ruling[]>
    Card.isLegal (format: Format): boolean
    Card.isIllegal (format: Format): boolean
    Card.getText (): string | null
    Card.getCost (): string | null
Sets
    Sets.byCode (code: string): Promise<Set>;
    Sets.byId (id: string): Promise<Set>;
    Sets.byTcgPlayerId (id: number): Promise<Set>;
    Sets.byName (name: string, fuzzy?: boolean): Promise<Set>;
    Sets.all (): Promise<Set[]>;
Set
    Set.getCards (): Promise<Card[]>
    Set.search (query: string, options?: SearchOptions): Promise<Card[]>
Rulings
    Rulings.byId (id: string): Promise<Ruling[]>;
    Rulings.bySet (code: string, collectorNumber: string | number): Promise<Ruling[]>;
    Rulings.byMultiverseId (id: number): Promise<Ruling[]>;
    Rulings.byMtgoId (id: number): Promise<Ruling[]>;
    Rulings.byArenaId (id: number): Promise<Ruling[]>;
Symbology
    Symbology.all (): Promise<CardSymbol[]>;
    Symbology.parseMana (mana: string): Promise<ManaCost>;
Catalogs
    Catalog.cardNames (): Promise<string[]>;
    Catalog.artistNames (): Promise<string[]>;
    Catalog.wordBank (): Promise<string[]>;
    Catalog.creatureTypes (): Promise<string[]>;
    Catalog.planeswalkerTypes (): Promise<string[]>;
    Catalog.landTypes (): Promise<string[]>;
    Catalog.artifactTypes (): Promise<string[]>;
    Catalog.enchantmentTypes (): Promise<string[]>;
    Catalog.spellTypes (): Promise<string[]>;
    Catalog.powers (): Promise<string[]>;
    Catalog.toughnesses (): Promise<string[]>;
    Catalog.loyalties (): Promise<string[]>;
    Catalog.watermarks (): Promise<string[]>;
    Catalog.keywordAbilities (): Promise<string[]>;
    Catalog.keywordActions (): Promise<string[]>;
    Catalog.abilityWords (): Promise<string[]>;
    Catalog.supertypes (): Promise<string[]>;
Bulk Data
    BulkData.downloadByType (type: BulkDataType): Promise<Stream | undefined>;
    BulkData.downloadById (id: string): Promise<Stream | undefined>;
    BulkData.definitions (): Promise<BulkDataDefinition[]>;
    BulkData.definitionByType (type: BulkDataType): Promise<BulkDataDefinition>;
    BulkData.definitionById (id: string): Promise<BulkDataDefinition>;
Migrations
    Migrations.all (page?: number): MagicEmitter<Migration>;
    Migrations.byId (id: string): Promise<Migration>;
Misc
    setTimeout (timeout: number): void;
    Caching
        setRetry (attempts: number, timeout?: number, canRetry?: (error: SearchError) => boolean): void;
        setFuzzySearch (search: <T>(search: string, targets: T[], key: keyof T) => T | undefined): void;
        MagicEmitter<T, NOT_FOUND>
