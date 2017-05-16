
<div id="page-wrapper"><div id="page">
  <div id="header" class="<?php print $secondary_menu ? 'with-secondary-menu': 'without-secondary-menu'; ?>"><div class="section clearfix">
    <?php print render($page['header']); ?>
  </div></div> <!-- /.section, /#header -->
  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">
    <div id="content">
      <?php print render($page['content']); ?>
    </div>
  </div></div> <!-- /#main, /#main-wrapper -->
</div></div> <!-- /#page, /#page-wrapper -->
