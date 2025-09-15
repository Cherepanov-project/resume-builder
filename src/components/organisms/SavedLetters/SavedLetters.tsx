import { useAppSelector, useAppDispatch } from "@/store/store";
import { Grid, Box } from "@mui/material";
import classes from "./SavedLetters.module.scss";
import DefaultButton from "@/components/atoms/DefaultButton";
import { useState } from "react";
import { ParseTreeToTable } from "@/pages/LetterBuilderPage/EmailPage";
import { useNavigate } from "react-router-dom";
import { deleteAllLetters, deleteLetter } from "@/store/LetterBuilderStore/savedLettersSlice";

const SavedLetters = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerSaveLetters = useAppSelector((store) => store.savedLetters.letters);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedContainer = containerSaveLetters.find((el) => el.id === selectedId);
  const isEmptyLettersArr = containerSaveLetters.length > 0;

  const handleClickOnOpen = (id: string) => {
    const containerToOpen = containerSaveLetters.find((el) => el.id === id);
    navigate("/letter-builder-page", {
      state: { saveContainer: containerToOpen },
    });
  };

  const handleShowClick = (id: string) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <>
      {showModal && selectedContainer && (
        <section>
          <div className={classes.preview}>
            <div className={classes.glass} />
            <table
              style={{
                borderSpacing: "10px",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <ParseTreeToTable
                  elements={selectedContainer.elements?.activeElements || []}
                  numberOfColumns={6}
                />
              </tbody>
            </table>
          </div>
          <div className={classes.previewBg} onClick={handleCloseModal} />
        </section>
      )}

      <div className={classes.header}>
        {isEmptyLettersArr && (
          <DefaultButton onClick={() => dispatch(deleteAllLetters())} label="Delete all" primary />
        )}
      </div>
      <Grid className={classes.container} container spacing={3} sx={{ padding: 2 }}>
        {containerSaveLetters.map((container) => (
          <Grid item key={container.id} xs={12} sm={6} md={4} lg={4}>
            <Box
              className={classes.letter}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                width: "90%",
                height: 200,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#f5f5f5",
              }}
            >
              <DefaultButton onClick={() => handleClickOnOpen(container.id)} label="Open" primary />
              <DefaultButton
                onClick={() => handleShowClick(container.id)}
                label="Show preview"
                primary
              />
              <DefaultButton
                onClick={() => {
                  dispatch(deleteLetter(container.id));
                }}
                label="Delete"
                primary
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SavedLetters;
