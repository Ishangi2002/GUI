   M S B A M L   `   `   `  ����L  Hnotetakingapp_imp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:notetakingapp_impnotetakingapp_imp  5   	   $    notetakingapp_imp.UpdateWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:notetakingapp_imp     5   	     � Title$  UpdateWindow��5   	   $	��600��6   $	��900��6,   
�������.��5	      �� $��200 100 200 100q�6   ���#D9DDDC$��1q�6<    �� CornerRadius$ 3��6P   ._�5
   
   � .+�5      �� -   5         ��Name$ CrossTextBlock��5      $	��❌��5      $��10(�5      $��Right=�5      $	��Top=�5      $��	0,14,31,0q�5      ���#D6D6D6$��13��5      $��13��6     � Cursor$
 Hand��5      �� 5      $
��Auto=�6   $
��Auto=�6>   .��5      �� .+�5      �� $��15 10q�5      $��12(�5      $��20��6   �� 5      $�TITLE��6   ���#D6D6D66    �� 5      $�*��6   
���  ��6   5      �� 5       -   5         ��Name$ txtTitle��5       ���#D6D6D6$��20(�5"      $
��Left=�5#      $��10 -5q�5$      $	��474��5%      
�������$��Do the Maths Assignment��5)      $��0 0 0 0q�5*      �� 5,      $��15 15q�5-      $��12(�5.      �� 5/      $�CONTENT��6   ���#D6D6D66!    �� 50      $�*��6   
���  ��6   51      �� 52      -   5        $ 
txtContent��52      ���#D6D6D6$��15(�54      $
��Left=�55      $��20 -5q�56      $	��474��57      
�������$��Content��5;      $��0 0 0 0q�5<      �� 5=      $��15 150q�5>      $��12(�5?      �� 5@      $
�TAGS��6   ���#D6D6D66   5A      �� 5B      -   5        $ txtTags��5B      $��15 -165 -10 100q�5C      $��20��5D      $	��150��5E      $
��Left=�5F      ���#D6D6D6���#D6D6D6$��Add tags��5K      �� 5M      $��18��6   $��18��5N      $��-130 -265 0 0q�5O      ��5P      �� 5Q       �� 
TargetType" ��6.   .R�5R   "   �� 
�������$ 2��6<   ���#7321A6$��1q�6d   ._�5S   &   �� $��+��67   $��Center=�6C   $��Center=�6`   ���#7321A6$��18(�5T       J� RenderTransformOrigin$ 0.507,0.591&�6-   $��28��6Q   $��12��6]   5U   #   5V      5X      �� 5Z      -   5        $	��455��5Z      $��25��5[      $��-25 -190 0 0q�5\      ��5_      �� 5`      " ��6.   .R�5a   "   �� ���#7321A6$ 2��6>   ���#7321A6$��1q�6f   ._�5b   &   �� $��Update��67   $
��Left=�6I   $	��Top=�6d   
�������$��12(�5c      $ 0.507,0.591&�6-   $��20��6Q   $��76��6]   $��	216,3,0,0q�6h   5d   #   5e      5g      5h      5i      5j      5k      5l      