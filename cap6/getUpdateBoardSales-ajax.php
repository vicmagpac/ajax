<?php
header("Content-Type: text/xml");
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
?>
<totals>
	<boards-sold><?php echo rand(1000, 10000); ?></boards-sold>
	<boots-sold><?php echo rand(1000, 10000); ?></boots-sold>
	<bindings-sold><?php echo rand(1000, 10000); ?></bindings-sold>
</totals>