   M S B A M L   `   `   `  ����  notetakingapp_imp"    notetakingapp_imp.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  	Dashboard��5   	   $	��600��6   $	��900��6(   
������� � WindowState$ 	Maximized=�6G    � WindowStartupLocation$ CenterScreen=�5   	   .��5      �  J� RenderTransformOrigin$ 0.556,-0.285&�6   .+�5	   
   �� $��Notes��6   $��18(�5
      $
��Bold"�5      $	��Top=�5      $
��Left=�5      $��	20,15,0,0q�5      �� 5   
   $	��250��6   $��30��6   $��Center=�6)   $	��Top=�6F   $��0,16,0,0q�6^    �� CornerRadius$ 5��5   	   ���#F2F3F5
�������$��0q�6G   ._�5      ��  �� Orientation$ 
Horizontal=�6   $��Center=�62   .+�5      �� -   5         ��Name$ searchTextBox��5      $��Search Notes��5      
�������$��15(�5      $��30��5      
������ $��0q�5      
�������$��Center=�5      $��	7,-2,-7,0q�5      �� 5       $
��🔍��6   $��14(�5!      $��Center=�5"      $��Right=�5#      $��	130,0,0,0q�5$      
�������5%      5&      5'      �� 5+   
   	 �� X1$ 0��6   	 �� Y1$ 55��6   		 �� X2$
	 2000��6   	
 �� Y2$
 55��6(   ���#D1D0CE$��1��5-      $��0,5,0,-5q�5.      � 52   
   $��Right=�6   $	��Top=�6+   $��	0,11,30,0q�6C   .+�53      A� $��30��6   $��30��6!   ���#F2F3F5$��Center=�6<   $
��Left=�6W   $��
-128,0,0,0q�6r   �� 54      $��14(�65   $��Center=�6C   $��Center=�6^   
�������$
��Bold"�6�   ��6   �� *FirstLetter+6�   55      �� 58   
   $��Ishangi Shashinthya��6   $��12(�59      $	��Top=�5:      $��Right=�5;      $��	0,13,18,0q�5<      �� 5>   
   $��Right=�6   $��	0,29,89,2q�60   $��11(�6C    K� ZIndex$ 2��6Q   �� 5?      -   5        $��
login_page?�5?      ���#C3C7C7.�6S   ��5@   
   �� 5A       �� 
TargetType" ��6   .�5B      ��  �� Property � �� �� Value �#C3C7C76/    �� Triggers 5C      P� 5D       P� Property �@��IsMouseOver P� Value$
 True��65   . �5E      ��  � �� �#C3C7C767   5F      5H      .�5I      .�5J   
   �� $�Logout��6   5K      5L      �� 5O   
   $��20,80,20,80q�6   $
��Auto=�6,   $��Disabled=�6O   .��5P      �� -   5         ��Name$ 	NotesList��5P      ��5Q      �� 5R      .R�5S      � $��Center=�6$   5T      ��5V      �� 5W      .R�5X      �� $	��320��6!   $	��130��6-   $��10q�6:   $ 6��6F   
����������#C3C7C7$��1q�6�    �� Padding$ 10q�6�   ._�5Y      � .+�5\   "   �� $��0��6-   $��0��6:   $��2��6J   $��0,0,0,5q�6^   .+�5]   &   �� $��16(�6G   $
��Bold"�6U   $��0,0,0,5q�6g   ��60   �� *Title+6g   �� 5^   &   $��12(�6O   ���#D6D6D6$��0,0,0,5q�6r   ��60   �� *FormattedDate+6r   �� 5_   &   $��14(�6I   $
��Wrap=�6W   $��0,0,0,10q�6k   ��60   �� *	Content+6k   5`   #   �� 5b   "   $ 
Horizontal=�6-   $��Stretch=�6F   $��Bottom=�6d   .+�5c   &   �� ���#F2F3F5$ 6��6B   $	 5,2q�6S   $��0,0,10,0q�6a   ._�5d   *   �� $��12(�6J   
���������64   �� *Tags+6X   5e   '   �� 5g   &   -   5        $	��✏��5g   -   $��20��69   $��20��6D   $��	180,0,0,0q�6P   
����������#D6D6D6$��0q�6�   $��Bottom=�6�   ��5h   *   �� 5i   .   " ��64    �� BasedOn# [B��6H   .�5j   2   ��  � �� 5k   6   �� 5l   :    �� 
TargetType" ��6J   .R�5m   >   �� $��Center=�6O   $��Center=�6l   5n   ;   5p   3   �� 5q   2    � ��
 �����6O   �� 5r   2    � �� �#D6D6D66O   �� 5s   2    � ��$ 0q�6T   5t   /   5v   '   �� 5x   &   -   5        $
��🗑��5x   -   $��20��6:   $��20��6E   
����������#D6D6D6$��0q�6y   $��Bottom=�6�   $��Right=�6�   ��5y   *   �� 5z   .   " ��64   # [B��6H   .�5{   2   ��  � �� 5|   6   �� 5}   :   " ��6J   .R�5~   >   �� $��Center=�6O   $��Center=�6l   5   ;   5�   3   �� 5�   2    � ��
 �����6O   �� 5�   2    � �� �#D6D6D66O   �� 5�   2    � ��$ 0q�6T   5�   /   5�   '   5�   #   5�      5�      5�      5�      5�      �� 5�   
   $��50��6   $��50��6   $��Right=�6(   $��Bottom=�6D   $��	0,0,36,37q�6_   ���#7321A6$ 10��5�      ._�5�      �� -   5        $��50��5�      $��50��6    
������ 
������ 
�������$��30(�5�      $��0,-6,0,6q�6   $��+��6-   ��5�      �� 5�      " ��6   # [B��60   .�5�      ��  � �� 5�      �� 5�   "   " ��62   .R�5�   &   �� $��Center=�67   $��Center=�6T   5�   #   5�      �� 5�       � ��
 ���� 67   �� 5�       � ��
 ���� 68   �� 5�       � ��
 �����67   �� 5�       � ��$ 30(�65   5�      5�      5�      5�      5�      