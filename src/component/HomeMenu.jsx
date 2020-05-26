import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AktifitasPesanan from "./HomeAktifitasPesanan";
import HomeSideBar from "./HomeSideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomeMenu = (props) => {
  // console.log("home menu", props.orderData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeSideBar />
      <main className={classes.content} style={{ backgroundColor: "#fafafa" }}>
        <div className={classes.toolbar} />
        <div className="row">
          <div className="col-7">
            <AktifitasPesanan {...props} />
          </div>
          <div className="col-5">
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a. Consequat mauris nunc congue
              nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a. Consequat mauris nunc congue nisi vitae suscipit.
              Fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam. Pulvinar elementum integer enim neque volutpat ac tincidunt.
              Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit
              amet volutpat consequat mauris. Elementum eu facilisis sed odio
              morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
              tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque
              nec nam aliquam sem et tortor. Habitant morbi tristique senectus
              et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a. Consequat mauris nunc congue
              nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a.
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeMenu;
