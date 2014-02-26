<!DOCTYPE html>
<html lang="EN">

<head>
    <?php include_once( 'inc/header.php'); ?>
</head>

<body>
    
	<table>
	<?php
		$array1 = array(
			'1' => array(
				'a' => array('aaa','bbb','ccc'),
				'b' => array('aaa','bbb','ccc'),
				'c' => array('aaa','bbb','ccc')
			),
			'2' => array(
				'd' => array('aaa','bbb','ccc'),
				'e' => array('aaa','bbb','ccc'),
				'f' => array('aaa','bbb','ccc')
			),
			'3' => array(
				'g' => array('aaa','bbb','ccc'),
				'h' => array('aaa','bbb','ccc'),
				'i' => array('aaa','bbb','ccc')
			)
		);
		foreach($array1 as $k => $v):
			echo '<tr style="border-bottom: 1px solid #ccc">';
			

			foreach($v as $k1 => $v1):
				echo '<td>';
				foreach($v1 as $k2 => $v2):
					echo '$k2 : '.$k2.'<br>';
					echo '$v2 : '.$v2.'<br>';
				endforeach;
				echo '</td>';
			endforeach;
			echo '</tr>';
		endforeach;
	?>
	</table>

    
</body>

</html>



















































