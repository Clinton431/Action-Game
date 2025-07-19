import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    // @ts-ignore
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // > 1024
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={function (searchText: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectSortOrder={function (sortOrder: string): void {
              throw new Error("Function not implemented.");
            }}
            sortOrder={""}
          />
        </HStack>
        <GameGrid
          gameQuery={gameQuery}
          // gameQuery={undefined}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
